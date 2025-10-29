document.addEventListener(
	"DOMContentLoaded",
	function () {
		const dietaryFilter = document.getElementById(
			"dietary-filter"
		);
		const portionFilter = document.getElementById(
			"portion-filter"
		);
		const menuItems = document.querySelectorAll(
			"#menu-items .col-md-4"
		);

		function filterMenu() {
			const dietaryValue = dietaryFilter.value;
			const portionValue = portionFilter.value;

			menuItems.forEach((item) => {
				const badges =
					item.querySelectorAll(".badge");
				let show = true;

				if (dietaryValue !== "All") {
					const hasDietary = Array.from(
						badges
					).some(
						(badge) =>
							badge.textContent === dietaryValue
					);
					if (!hasDietary) show = false;
				}

				if (portionValue !== "All") {
					const hasPortion = Array.from(
						badges
					).some(
						(badge) =>
							badge.textContent === portionValue
					);
					if (!hasPortion) show = false;
				}

				item.style.display = show
					? "block"
					: "none";
			});
		}

		dietaryFilter.addEventListener(
			"change",
			filterMenu
		);
		portionFilter.addEventListener(
			"change",
			filterMenu
		);
	}
);

// Mobile menu close functionality
document.addEventListener(
	"DOMContentLoaded",
	function () {
		const navbarCollapse =
			document.getElementById("navbarNav");
		const navLinks = document.querySelectorAll(
			"#navbarNav .nav-link"
		);

		// Close menu when clicking nav links
		navLinks.forEach((link) => {
			link.addEventListener("click", () => {
				const bsCollapse = new bootstrap.Collapse(
					navbarCollapse,
					{
						hide: true,
					}
				);
			});
		});

		// Close menu when clicking outside
		document.addEventListener(
			"click",
			function (event) {
				const navbar =
					document.querySelector(".navbar");
				const isClickInsideNavbar =
					navbar.contains(event.target);
				if (
					!isClickInsideNavbar &&
					navbarCollapse.classList.contains(
						"show"
					)
				) {
					const bsCollapse =
						new bootstrap.Collapse(
							navbarCollapse,
							{
								hide: true,
							}
						);
				}
			}
		);
	}
);
