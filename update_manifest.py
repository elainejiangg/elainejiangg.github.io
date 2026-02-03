#!/usr/bin/env python3
"""
Utility script to regenerate images.json with every file inside ./images.

Usage:
  python3 update_manifest.py

The script overwrites images.json with a sorted list of relative paths
("images/<filename>"). Only image extensions typically used on the site
are included.
"""

from __future__ import annotations

import json
import random
from pathlib import Path

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"}


def collect_images(images_dir: Path) -> list[str]:
  """Return sorted relative paths for every supported image file."""
  images = []
  for file_path in images_dir.iterdir():
    if file_path.is_file() and file_path.suffix.lower() in IMAGE_EXTENSIONS:
      images.append(f"images/{file_path.name}")

  random.shuffle(images)
  return images


def write_manifest(manifest_path: Path, entries: list[str]) -> None:
  manifest_path.write_text(
    json.dumps(entries, indent=2) + "\n",
    encoding="utf-8",
  )


def main() -> None:
  project_root = Path(__file__).parent
  images_dir = project_root / "images"
  manifest_path = project_root / "images.json"

  if not images_dir.exists():
    raise SystemExit(f"Images directory not found: {images_dir}")

  entries = collect_images(images_dir)
  if not entries:
    print("Warning: No image files found; manifest will be empty.")
  write_manifest(manifest_path, entries)
  print(f"Wrote {len(entries)} entries to {manifest_path}")


if __name__ == "__main__":
  main()

