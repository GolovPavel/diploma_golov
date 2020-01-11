from PIL import Image
import numpy as np
import shutil

def crop_img():
        img = Image.open("kalinin_test.png")
        rgb_img = img.convert("RGB")
        img_pixels = rgb_img.load()
        img_pixels_np = np.array(rgb_img)
        pix_width = rgb_img.width
        pix_height = rgb_img.height
        img_center = [int(pix_width / 2), int(pix_height / 2)]
        radius_pix = int(min([pix_width, pix_height]) / 2)
        radius = 30000
        scale = radius / (2 * radius_pix)

        for y_pix in range(pix_height):
            # Переводим координату y в систему координат с началом отсчета в центре изображения
            y_coord = radius / radius_pix * (img_center[1] - y_pix)
            y_coord = y_coord - scale if y_coord > 0 else y_coord + scale
            for x_pix in range(pix_width):
                # Обрезаем изображение по радиусу в пикселях
                if (x_pix - img_center[0]) ** 2 + (y_pix - img_center[1]) ** 2 <= radius_pix ** 2:
                    # Переводим координату x в систему координат с началом отсчета в центре изображения
                    x_coord = radius / radius_pix * (x_pix - img_center[0])
                    x_coord = x_coord - scale if x_coord > 0 else x_coord + scale
                    pixel_color = img_pixels[x_pix, y_pix]

                    # Forest
                    # if pixel_color != (223, 240, 206):
                    # 	img.putpixel((x_pix,y_pix), (0, 0, 0))

                    # Fields
                    # if pixel_color != (255, 254, 246):
                    # 	img.putpixel((x_pix,y_pix), (0, 0, 0))

                    # Town
                    # if pixel_color != (251, 248, 233):
                    # 	img.putpixel((x_pix,y_pix), (0, 0, 0))

                    # Water
                    if pixel_color != (185, 214, 229):
                    	img.putpixel((x_pix,y_pix), (0, 0, 0))


                else:
                	img.putpixel((x_pix,y_pix), (255, 255, 255))
        img.save("result.png")

crop_img()