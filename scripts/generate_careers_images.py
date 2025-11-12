import math
import os
import random
from pathlib import Path
from typing import Tuple

from PIL import Image, ImageDraw, ImageFilter

BASE = Path('public/careers')
BASE.mkdir(parents=True, exist_ok=True)

random.seed(42)

def create_gradient(size: Tuple[int, int], start: Tuple[int, int, int], end: Tuple[int, int, int], vertical: bool = True) -> Image.Image:
    width, height = size
    gradient = Image.new('RGB', size, start)
    draw = ImageDraw.Draw(gradient)
    for i in range(height if vertical else width):
        ratio = i / (height - 1 if vertical else width - 1)
        color = tuple(int(start[j] * (1 - ratio) + end[j] * ratio) for j in range(3))
        if vertical:
            draw.line([(0, i), (width, i)], fill=color)
        else:
            draw.line([(i, 0), (i, height)], fill=color)
    return gradient


def add_noise(image: Image.Image, intensity: float = 0.05) -> Image.Image:
    width, height = image.size
    pixels = image.load()
    for x in range(width):
        for y in range(height):
            r, g, b = pixels[x, y]
            noise = int((random.random() - 0.5) * 255 * intensity)
            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise)),
            )
    return image


def add_glow_lines(image: Image.Image, count: int = 6, orientation: str = 'vertical') -> None:
    draw = ImageDraw.Draw(image, 'RGBA')
    width, height = image.size
    for _ in range(count):
        opacity = random.randint(40, 90)
        thickness = random.randint(2, 6)
        offset = random.randint(0, width if orientation == 'vertical' else height)
        color = (203, 174, 112, opacity)
        if orientation == 'vertical':
            draw.rectangle([offset, 0, offset + thickness, height], fill=color)
        else:
            draw.rectangle([0, offset, width, offset + thickness], fill=color)


def add_geometric_overlays(image: Image.Image, count: int = 5) -> None:
    draw = ImageDraw.Draw(image, 'RGBA')
    width, height = image.size
    for _ in range(count):
        w = random.randint(width // 10, width // 3)
        h = random.randint(height // 10, height // 3)
        x = random.randint(0, width - w)
        y = random.randint(0, height - h)
        opacity = random.randint(30, 80)
        draw.rectangle([x, y, x + w, y + h], outline=(203, 174, 112, opacity), width=2)


def add_arc(image: Image.Image, bounds: Tuple[int, int, int, int], start: int, end: int, width: int = 3) -> None:
    draw = ImageDraw.Draw(image, 'RGBA')
    draw.arc(bounds, start=start, end=end, fill=(203, 174, 112, 120), width=width)


def render_skyline(image: Image.Image, levels: int = 8) -> None:
    draw = ImageDraw.Draw(image, 'RGBA')
    width, height = image.size
    base_y = int(height * 0.75)
    for _ in range(levels):
        building_width = random.randint(width // 20, width // 10)
        building_height = random.randint(height // 6, height // 2)
        x = random.randint(0, width - building_width)
        y = base_y - building_height
        draw.rectangle([x, y, x + building_width, base_y], fill=(18, 18, 18, 255))
        draw.rectangle([x, y + 4, x + building_width, base_y], outline=(203, 174, 112, 90), width=1)


def save_image(image: Image.Image, filename: str, quality: int = 95) -> None:
    target = BASE / filename
    image.save(target, format='WEBP', quality=quality, method=6)
    print('created', target)


def create_hero():
    img = create_gradient((1920, 1080), (10, 10, 10), (35, 30, 25))
    render_skyline(img, levels=12)
    add_glow_lines(img, count=8)
    img = add_noise(img, 0.04)
    add_arc(img, (-200, 400, 1200, 1400), 0, 120, width=5)
    save_image(img, 'hero.webp')


def create_office():
    img = create_gradient((1400, 1750), (18, 18, 18), (45, 40, 35))
    add_geometric_overlays(img, 6)
    add_glow_lines(img, 4)
    img = add_noise(img, 0.03)
    save_image(img, 'office.webp')


def create_values():
    seeds = [11, 22, 33]
    for idx, seed in enumerate(seeds, start=1):
        random.seed(seed)
        img = create_gradient((600, 600), (20, 20, 20), (30 + idx * 5, 25 + idx * 5, 20 + idx * 5))
        add_geometric_overlays(img, 3 + idx)
        add_glow_lines(img, 2, orientation='horizontal')
        img = add_noise(img, 0.04)
        save_image(img, f'value-{idx}.webp')
    random.seed(42)


def create_gallery(section: int, palette: Tuple[Tuple[int, int, int], Tuple[int, int, int]]):
    for idx in range(1, 4):
        width = 2000
        height = int(width * 0.68)
        img = create_gradient((width, height), palette[0], palette[1], vertical=bool(idx % 2))
        add_glow_lines(img, 5)
        add_geometric_overlays(img, 4)
        render_skyline(img, levels=6)
        img = add_noise(img, 0.05)
        save_image(img, f'gallery-{section}-{idx}.webp')


def create_academy():
    img = create_gradient((1600, 2000), (15, 15, 15), (45, 38, 30))
    add_glow_lines(img, 5)
    add_geometric_overlays(img, 7)
    img = add_noise(img, 0.05)
    save_image(img, 'academy.webp')


def create_statement():
    img = create_gradient((1920, 1080), (18, 18, 18), (36, 32, 28))
    add_geometric_overlays(img, 8)
    add_arc(img, (-100, -100, 1400, 1300), 40, 220, width=6)
    add_glow_lines(img, 3)
    img = add_noise(img, 0.04)
    save_image(img, 'statement.webp')


def create_house():
    for idx in range(1, 7):
        img = create_gradient((1400, 1750), (16, 16, 16), (28 + idx * 4, 25 + idx * 3, 22 + idx * 2))
        add_geometric_overlays(img, 5)
        add_glow_lines(img, 3)
        img = add_noise(img, 0.04)
        save_image(img, f'house-{idx}.webp')


def create_apply_side():
    img = create_gradient((1200, 1600), (18, 18, 19), (37, 32, 28))
    add_glow_lines(img, 5)
    add_geometric_overlays(img, 6)
    add_arc(img, (200, 200, 1000, 1400), 200, 320, width=4)
    img = add_noise(img, 0.03)
    save_image(img, 'apply-side.webp')


def create_faq_bg():
    img = create_gradient((1920, 1080), (15, 15, 16), (32, 30, 28))
    add_glow_lines(img, 7, orientation='horizontal')
    img = add_noise(img, 0.06)
    save_image(img, 'faq-bg.webp')


def create_not_ready():
    img = create_gradient((1920, 1080), (12, 12, 12), (26, 24, 22))
    add_glow_lines(img, 4)
    render_skyline(img, levels=10)
    img = add_noise(img, 0.05)
    save_image(img, 'notready.webp')


def create_newsletter():
    img = create_gradient((1920, 1080), (25, 24, 22), (45, 38, 30))
    add_glow_lines(img, 6, orientation='horizontal')
    add_geometric_overlays(img, 5)
    img = add_noise(img, 0.04)
    save_image(img, 'newsletter.webp')


def create_galleries():
    palettes = [
        ((18, 18, 18), (60, 54, 44)),
        ((20, 20, 22), (55, 43, 38)),
        ((18, 19, 20), (48, 40, 36)),
        ((17, 18, 20), (52, 42, 34)),
    ]
    for idx, palette in enumerate(palettes, start=1):
        create_gallery(idx, palette)


def main():
    create_hero()
    create_office()
    create_values()
    create_galleries()
    create_academy()
    create_statement()
    create_house()
    create_apply_side()
    create_faq_bg()
    create_not_ready()
    create_newsletter()

if __name__ == '__main__':
    main()
