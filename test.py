import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('8.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# inverse binary image, to ensure text region is in white
# because contours are found for objects in white
th = cv2.threshold(gray,0,255,cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

black = np.zeros([img.shape[0] + 2, img.shape[1] + 2], np.uint8)
mask = cv2.floodFill(th.copy(), black, (0,0), 0, 0, 0, flags=8)[1]

# dilation using horizontal kernel
kernel_length = 30
horizontal_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (kernel_length, 1))
dilate = cv2.dilate(mask, horizontal_kernel, iterations=1)

img2 = img.copy()
contours = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
contours = contours[0] if len(contours) == 2 else contours[1]
for c in contours:
  x, y, w, h = cv2.boundingRect(c)

  print(x/img.shape[1], y/img.shape[0], w/img.shape[1], h/img.shape[0])
  img2 = cv2.rectangle(img, (x, y), (x + w, y + h), (0,255,0), 2)

cv2.imwrite("filename.png", img2) 