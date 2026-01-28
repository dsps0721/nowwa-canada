from PIL import Image
import os

# Paths
input_path = "/home/ubuntu/nowwa-canada/client/public/images/logo-full.png"
output_dir = "/home/ubuntu/nowwa-canada/client/public"
images_dir = "/home/ubuntu/nowwa-canada/client/public/images"

# Open the image
img = Image.open(input_path)

# 1. Create Favicon (Crop the horse icon)
# The horse icon is on the left. Let's crop it.
# Based on the image dimensions (1266x363), the horse is roughly the first 363x363 square.
# Let's be a bit more precise by finding the bounding box of the non-white pixels.
# Since the background is white, we can convert to RGBA and make white transparent first?
# Or just crop the left part.

# Let's try to crop the left part where the horse is.
# The horse seems to be roughly 1/4 of the width.
horse_crop = img.crop((0, 0, 380, 363))

# Save as favicon.ico (multiple sizes)
horse_crop.save(os.path.join(output_dir, "favicon.ico"), format="ICO", sizes=[(32, 32), (16, 16), (48, 48), (64, 64)])

# Save as logo.png (for header, just the horse or full logo?)
# Usually header uses the full logo.
# Let's save the full logo as logo.png in images folder, but resize it to be web-friendly height (e.g. 80px height)
aspect_ratio = img.width / img.height
new_height = 80
new_width = int(new_height * aspect_ratio)
resized_logo = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
resized_logo.save(os.path.join(images_dir, "logo.png"))

# Also save a version of just the horse for mobile or small icon usage
horse_resized = horse_crop.resize((80, int(80 * horse_crop.height / horse_crop.width)), Image.Resampling.LANCZOS)
horse_resized.save(os.path.join(images_dir, "logo-icon.png"))

print("Logo processing complete.")
