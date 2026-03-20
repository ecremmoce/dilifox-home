#!/usr/bin/env python3
"""
Nano Banana Pro Image Generation Script

Generate images using Google Gemini 3 Pro Image (Nano Banana Pro) API.

Usage:
    python generate_image.py "prompt" [--resolution 2K] [--aspect 1:1] [--output ./generated_images]
    python generate_image.py "Change background" --reference original.png

Environment:
    GEMINI_API_KEY: API key from Google AI Studio
"""

import argparse
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

_script_dir = Path(__file__).parent
load_dotenv(_script_dir / ".env")

DEFAULT_RESOLUTION = "2K"
DEFAULT_ASPECT_RATIO = "16:9"
DEFAULT_OUTPUT_DIR = "./generated_images"

MIME_TO_EXT = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/webp": ".webp",
}


def parse_args(args: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate images with Nano Banana Pro API"
    )
    parser.add_argument("prompt", type=str, help="Image generation prompt")
    parser.add_argument(
        "--resolution", type=str, default=DEFAULT_RESOLUTION,
        choices=["1K", "2K", "4K"], help=f"Output resolution (default: {DEFAULT_RESOLUTION})"
    )
    parser.add_argument(
        "--aspect", type=str, default=DEFAULT_ASPECT_RATIO,
        help=f"Aspect ratio (default: {DEFAULT_ASPECT_RATIO})"
    )
    parser.add_argument(
        "--output", type=str, default=DEFAULT_OUTPUT_DIR,
        help=f"Output directory (default: {DEFAULT_OUTPUT_DIR})"
    )
    parser.add_argument(
        "--reference", type=str, action="append", default=[],
        help="Reference image path (can specify multiple, max 14)"
    )
    return parser.parse_args(args)


def get_output_path(output_dir: str, mime_type: str = "image/png") -> Path:
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    ext = MIME_TO_EXT.get(mime_type, ".png")
    return output_path / f"{timestamp}{ext}"


def generate_image(
    prompt: str,
    resolution: str,
    aspect_ratio: str,
    output_dir: str,
    reference_images: list[str] | None = None
) -> str | None:
    if reference_images:
        for image_path in reference_images:
            if not Path(image_path).exists():
                print(f"[Error] Reference image not found: {image_path}")
                return None

    client = genai.Client()

    if reference_images:
        contents: list = []
        for image_path in reference_images:
            img = Image.open(image_path)
            contents.append(img)
        contents.append(prompt)
    else:
        contents = prompt

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=contents,
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size=resolution
            )
        )
    )

    for part in response.parts:
        if part.text is not None:
            print(f"[Info] {part.text}")
        elif part.inline_data is not None:
            mime_type = part.inline_data.mime_type or "image/png"
            image = part.as_image()
            output_path = get_output_path(output_dir, mime_type)
            image.save(str(output_path))
            print(f"[Success] Image saved: {output_path}")
            return str(output_path)

    print("[Warning] No image in response")
    return None


def main():
    args = parse_args()

    if args.reference and len(args.reference) > 14:
        print("[Error] Maximum 14 reference images allowed")
        sys.exit(1)

    try:
        result = generate_image(
            prompt=args.prompt,
            resolution=args.resolution,
            aspect_ratio=args.aspect,
            output_dir=args.output,
            reference_images=args.reference if args.reference else None
        )
        if result is None:
            sys.exit(1)
    except Exception as e:
        print(f"[Error] Image generation failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
