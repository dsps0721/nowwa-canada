from PIL import Image

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        width, height = img.size
        
        # The user wants to focus on the coffee cup on the right side
        # and make it centered.
        # Based on the image description, the cup is on the right.
        # We'll crop the right side of the image.
        
        # Calculate crop box
        # We want a square or portrait aspect ratio to fit the card
        # Let's take the right 60% of the image to ensure we get the cup
        left = int(width * 0.4)
        top = 0
        right = width
        bottom = height
        
        cropped_img = img.crop((left, top, right, bottom))
        
        # Save the cropped image
        cropped_img.save(output_path)
        print(f"Successfully cropped image to {output_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_file = "/home/ubuntu/nowwa-canada/client/public/images/product-cheese-latte-new.png"
    output_file = "/home/ubuntu/nowwa-canada/client/public/images/product-cheese-latte.png"
    crop_image(input_file, output_file)
