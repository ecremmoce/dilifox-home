---
name: nano-banana-pro
description: Generate high-quality images using Google Gemini 3 Pro Image (Nano Banana Pro) API
triggers:
  - image generation
  - generate image
  - create image
  - 이미지 생성
  - 이미지 만들어
  - 그림 그려
  - 画像生成
---

# Nano Banana Pro Image Generation Skill

Generate high-quality images using Google's Nano Banana Pro API (Gemini 3 Pro Image).

## Setup

- `CCSKILL_NANOBANANA_DIR` environment variable must point to the skill directory
- `GEMINI_API_KEY` must be configured (environment variable or `.env` file in skill directory)

## Core Command

```bash
$CCSKILL_NANOBANANA_DIR/venv/bin/python $CCSKILL_NANOBANANA_DIR/generate_image.py "prompt"
```

## Options

| Option | Values | Default | Description |
|--------|--------|---------|-------------|
| --resolution | 1K, 2K, 4K | 2K | Output resolution |
| --aspect | 1:1, 4:3, 3:4, 16:9, 9:16 | 16:9 | Aspect ratio |
| --output | directory path | ./generated_images | Output directory |
| --reference | image path (max 14) | none | Reference images for editing |

## Usage Examples

### Basic generation
```bash
$CCSKILL_NANOBANANA_DIR/venv/bin/python $CCSKILL_NANOBANANA_DIR/generate_image.py "A serene Japanese garden at sunset" --resolution 4K --aspect 16:9
```

### With reference image (editing)
```bash
$CCSKILL_NANOBANANA_DIR/venv/bin/python $CCSKILL_NANOBANANA_DIR/generate_image.py "Change the background to a beach" --reference original.png
```

### Square format (logos, icons)
```bash
$CCSKILL_NANOBANANA_DIR/venv/bin/python $CCSKILL_NANOBANANA_DIR/generate_image.py "Minimalist tech company logo" --aspect 1:1 --resolution 2K
```

## Prompting Best Practices

1. Be conversational - Use natural language, not keyword lists
2. Be specific - Include subject, composition, action, location, style
3. Edit iteratively - Use --reference to refine existing images rather than regenerating
4. Specify style - e.g., "photorealistic", "watercolor", "flat illustration"

## Output

- Images saved with timestamp filename (e.g., 20260317_153045.png)
- Format: PNG, JPEG, or WebP (depends on API response)
- SynthID watermark is embedded automatically

## Important Notes

- API charges apply per generation
- Small text and fine details may have accuracy limitations
- Maximum 14 reference images per request
