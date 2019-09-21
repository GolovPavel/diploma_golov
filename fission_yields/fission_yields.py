def get_yield_from_file(nuclide_name, file_lines):
	for line in file_lines:
		cur_nuclide_name = line[1:12].strip()
		first_slash_idx = cur_nuclide_name.index("-")
		cur_nuclide_name = cur_nuclide_name[first_slash_idx + 1:]

		if nuclide_name == cur_nuclide_name:
			return line[30:40]


CUMULATIVE_FILE = "cumulative_fission_yields_u235.txt"
INDEPENDENT_FILE = "independent_fission_yields_u235.txt"

if __name__ == "__main__":
	with open(CUMULATIVE_FILE) as f:
  		cumulative_lines = f.readlines()
	 
	with open(INDEPENDENT_FILE) as f:
  		independent_lines = f.readlines()
	 
	while True:
		nuclide_name = input("Enter nuclide name and atom number OR q to exit\n")

		if nuclide_name == "q":
			break

		cumulative_yeild = get_yield_from_file(nuclide_name, cumulative_lines)
		independent_yield = get_yield_from_file(nuclide_name, independent_lines)

		result = """{} yeilds:\n
			Independent: {}
			Cumulative : {}""".format(nuclide_name, independent_yield, cumulative_yeild)
		print(result)
