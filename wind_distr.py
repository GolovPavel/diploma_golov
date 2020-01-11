import matplotlib.pyplot as plt
import numpy as np

h0 = 10
u0 = 5
h_max = 2000
k = 0.37

def u(h):
	if h > h_max:
		h = h_max
	return u0 * (h / h0) ** k


h = np.linspace(10, 2500, 200)
u = np.array(list(map(u, h)))

print(u)


plt.plot(h, u)
plt.xlabel('h, м', fontsize=16)
plt.ylabel('u, м/с', fontsize=16)
plt.grid()

plt.show()