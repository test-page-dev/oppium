"use strict";

$(function () {
	// Custom textarea
	if ($(".semditor-textarea").length) {
		let editor = new Simditor({
			textarea: $("#editor"),
			//optional options
		});
	}

	// Burger
	if (document.querySelector(".burger")) {
		let burgerWrap = document.querySelector(".burger");
		let burgerToggle = document.querySelector(".burger__toggle");
		let menu = document.querySelector(".header__inner-m");

		burgerWrap.onclick = function () {
			burgerToggle.classList.toggle("is-active");
			menu.classList.toggle("is-active");
			document.body.classList.toggle("is-active");
		};
	}

	// Custom select
	if ($(".custom-select").length) {
		function custom_select() {
			$(".custom-select:not(.select__hidden)").each(function () {
				let $this = $(this),
					numberOfOptions = $(this).children("option").length;

				$this.wrap('<div class="select"></div>');
				$this.after('<div class="select__styled"></div>');

				let $styledSelect = $this.next("div.select__styled");
				$styledSelect.text($this.children("option").eq(0).text());

				if ($this.attr("class")) {
					$styledSelect.addClass($this.attr("class"));
				}

				$this.addClass("select__hidden");

				let $list = $("<ul />", {
					class: "select__options",
				}).insertAfter($styledSelect);

				for (let i = 0; i < numberOfOptions; i++) {
					$("<li />", {
						text: $this.children("option").eq(i).text(),
						rel: $this.children("option").eq(i).val(),
					}).appendTo($list);
				}

				let $listItems = $list.children("li");

				$styledSelect.on("click", function (e) {
					e.stopPropagation();
					$("div.select__styled.active")
						.not(this)
						.each(function () {
							$(this)
								.removeClass("active")
								.next("ul.select__options")
								.fadeOut(200);
						});
					$(this)
						.toggleClass("active")
						.next("ul.select__options")
						.fadeToggle(200);
				});

				$listItems.on("click", function (e) {
					e.stopPropagation();
					$styledSelect.text($(this).text()).removeClass("active");
					$this.val($(this).attr("rel"));

					$this.trigger("change"); // TRIGGER CHANGE EVENT;

					$list.fadeOut(200);
				});

				$(document).on("click", function () {
					$styledSelect.removeClass("active");
					$list.fadeOut(200);
				});
			});
		}

		custom_select();
	}

	// Header popup
	if ($(".header").length) {
		let popupButton = $(".popup-button");
		let popupGlobal = $(".popup-global");
		let popupGlobalLink = $(".popup-global a");

		popupButton.on("click", function (e) {
			if (!$(this).hasClass("is-active")) {
				popupGlobal.removeClass("is-active");
				popupButton.removeClass("is-active");
			}

			$(this).toggleClass("is-active");
			$(this).next(popupGlobal).toggleClass("is-active");
			e.stopPropagation();
			e.preventDefault();
		});

		$(document).on("click", function () {
			popupGlobal.removeClass("is-active");
		});

		popupGlobal.on("click", function (e) {
			e.stopPropagation();
		});

		popupGlobalLink.on("click", function () {
			popupGlobal.removeClass("is-active");
		});
	}

	// Main actions tabs
	if ($(".main__actions").length) {
		let mainActionTab = $(".main__actions-tab");
		let mainActionBox = $(".main__actions-box");

		mainActionTab.on("click", function () {
			mainActionTab.removeClass("is-active");
			$(this).addClass("is-active");
			let id = this.id;
			mainActionBox.removeClass("is-active");
			let mainActionBoxActive = $('.main__actions-box[data-id="#' + id + '"]');
			mainActionBoxActive.addClass("is-active");
		});
	}

	// Marketing strategy slider
	if ($("#g-slider__grid").length) {
		let swiper = new Swiper("#g-slider__grid", {
			// loop: true,
			// freeMode: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next1",
				prevEl: ".swiper-button-prev1",
			},
			breakpoints: {
				1024: {
					spaceBetween: 15,
				},
			},
		});
	}

	// Gigs you may like slider
	if ($("#g-slider__grid2").length) {
		let swiper2 = new Swiper("#g-slider__grid2", {
			// loop: true,
			// freeMode: true,
			slidesPerView: "auto",
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			},
			breakpoints: {
				1024: {
					spaceBetween: 15,
				},
			},
		});
	}

	// Freelancer portfolio slider
	if ($("#g-slider__grid4").length) {
		let swiper4 = new Swiper("#g-slider__grid4", {
			slidesPerView: "auto",
			spaceBetween: 25,
			navigation: {
				nextEl: ".swiper-button-next4",
				prevEl: ".swiper-button-prev4",
			},
			breakpoints: {
				1024: {
					spaceBetween: 15,
				},
			},
		});
	}

	// Clients testimonials slider
	if ($("#g-slider__row").length) {
		let swiper3 = new Swiper("#g-slider__row", {
			// loop: true,
			// freeMode: true,
			speed: 800,
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next3",
				prevEl: ".swiper-button-prev3",
			},
			breakpoints: {
				1024: {
					spaceBetween: 15,
				},
			},
		});
	}

	// Category slider
	if ($("#category-slider").length) {
		let swiper4 = new Swiper("#category-slider", {
			loop: true,
			slidesPerView: "auto",
			spaceBetween: 25,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				1024: {
					spaceBetween: 15,
				},
			},
		});
	}

	// Show password button
	if ($(".password-input").length) {
		let passInput = $(".password-input");
		let passShowButton = $(".password-input__show-btn");

		passInput.on("input", function () {
			if ($(this).val() != 0) {
				$(this).next(passShowButton).removeClass("is-hidden");
			} else {
				$(this).next(passShowButton).addClass("is-hidden");
			}
		});

		passShowButton.on("click", function () {
			let passShowIcon = $(".password-input__show-icon");
			let passInputPrev = $(this).prev(".password-input");

			$(this).find(passShowIcon).toggleClass("is-hidden");

			if (passInputPrev.attr("type") == "password") {
				passInputPrev.attr("type", "text");
			} else {
				passInputPrev.attr("type", "password");
			}
		});
	}

	// View toggler
	if ($(".columns").length) {
		let columns = $(".columns__inner");
		let columnsButton = $(".columns__buttons i");

		columnsButton.on("click", function () {
			if ($(this).hasClass("columns__button-list")) {
				columns.removeClass("columns__inner--grid");
				columns.addClass("columns__inner--list");
			} else if ($(this).hasClass("columns__button-grid")) {
				columns.removeClass("columns__inner--list");
				columns.addClass("columns__inner--grid");
			}
			columnsButton.removeClass("is-active");
			$(this).addClass("is-active");
		});
	}

	// Modals
	if ($(".modal").length) {
		let modal = $(".modal");
		let modalBtn = $(".modal-btn");
		let overlay = $(".overlay");

		modalBtn.on("click", function (e) {
			e.preventDefault();
			let id = $(this).data("id");
			console.log(id);
			let thisModal = $('.modal[data-id="#' + id + '"]');
			modal.fadeOut();
			thisModal.fadeIn(200);
			overlay.fadeIn(200);
		});

		$(document).on("click", ".overlay, .modal__close", function () {
			modal.fadeOut(200);
			overlay.fadeOut(200);
		});
	}

	// Filter
	if ($(".messages__filter").length) {
		function filter(filter, query) {
			query = $.trim(query);
			$(filter).each(function () {
				$(this).text().search(new RegExp(query, "i")) < 0
					? $(this).hide().removeClass("name")
					: $(this).show().addClass("name");
			});
		}

		$("#search").on("keyup", function (event) {
			if (event.keyCode == 27 || $(this).val() == "") {
				$(this).val("");
				$(".messages__conv li").removeClass("name").show().addClass("name");
			} else {
				filter(".messages__conv li", $(this).val());
			}
		});

		let filterBtn = $(".messages__filter-btn");
		let filterBtnClose = $(".messages__filter-close");
		let filterInput = $(".messages__filter");

		filterBtn.on("click", function () {
			filterInput.addClass("is-active");
		});

		filterBtnClose.on("click", function () {
			filterInput.removeClass("is-active");
		});
	}

	// File upload input
	if ($(".file-input").length) {
		let fields = document.querySelectorAll(".file-input__input");

		Array.prototype.forEach.call(fields, function (input) {
			let label = input.nextElementSibling,
				labelVal = label.querySelector(".file-input__text").innerText;

			input.addEventListener("change", function (e) {
				let countFiles = "";
				if (this.files && this.files.length >= 1)
					countFiles = this.files.length;

				if (countFiles)
					label.querySelector(".file-input__text").innerText =
						"Files selected : " + countFiles;
				else label.querySelector(".file-input__text").innerText = labelVal;
			});
		});
	}

	// Messages sidebar
	if ($(".messages").length) {
		let sidebar = $(".messages__user");
		let sidebarBtn = $(".messages__chat-name");
		let sidebarClose = $(".messages__user-close");

		sidebarBtn.on("click", function () {
			sidebar.show();
		});

		sidebarClose.on("click", function () {
			sidebar.hide();
		});
	}

	// Columns filters button
	if ($(".columns").length) {
		$(".columns__filters").on("click", function () {
			console.log("object");
			$(".filters").fadeToggle(200);
			$(".overlay").fadeIn(200);
		});

		$(document).on("click", ".overlay", function () {
			$(".filters").fadeToggle(200);
			$(".overlay").fadeOut(200);
		});
	}

	// Accordion
	if ($(".accordion").length) {
		$(".accordion h5").click(function () {
			$(".accordion h5").not($(this)).removeClass("is-active");
			$(this).toggleClass("is-active");
			$(this).next().slideToggle(300);
			$(".accordion__item").not($(this).next()).slideUp(300);
		});
	}

	// // Proposition message
	// if ($(".proposition").length) {
	// 	$(".proposition__aside-contact").on("click", function () {
	// 		$(".proposition-message").fadeIn(200);
	// 		$(".overlay").fadeIn(200);
	// 	});

	// 	$(".proposition-message__close").on("click", function () {
	// 		console.log("first");
	// 		$(".proposition-message").fadeOut(200);
	// 		$(".overlay").fadeOut(200);
	// 	});
	// }

	// ------------------------------ //

	// Time input
	if ($(".bs-timepicker").length) {
		$(".bs-timepicker").timepicker();
	}

	// Number input
	if ($(".number-input").length) {
		$(
			'<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>',
		).insertAfter(".quantity input");

		$(".quantity").each(function () {
			let spinner = $(this),
				input = spinner.find('input[type="number"]'),
				btnUp = spinner.find(".quantity-up"),
				btnDown = spinner.find(".quantity-down"),
				min = input.attr("min"),
				max = input.attr("max");

			btnUp.click(function () {
				let oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					let newVal = oldValue;
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				} else {
					let newVal = oldValue + 1;
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				}
			});

			btnDown.click(function () {
				let oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					let newVal = oldValue;
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				} else {
					let newVal = oldValue - 1;
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				}
			});
		});
	}

	// Range input
	if ($(".input-range").length) {
		let rangeSlider = $('.input-range input[type="range"]');

		rangeSlider.each(function () {
			let valCalcCurrent =
				($(this).val() - $(this).attr("min")) /
				($(this).attr("max") - $(this).attr("min"));

			$(this).css(
				"background-image",
				"-webkit-gradient(linear, left top, right top, " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-fill)), " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-background))" +
					")",
			);
		});

		rangeSlider.on("input change", function () {
			let valCalcCurrent =
				($(this).val() - $(this).attr("min")) /
				($(this).attr("max") - $(this).attr("min"));

			$(this).css(
				"background-image",
				"-webkit-gradient(linear, left top, right top, " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-fill)), " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-background))" +
					")",
			);
		});
	}

	// Dropdown input
	if ($(".dropdown-input").length) {
		let dropInputWrap = $(".dropdown-input__popup");
		let dropInputButton = $(".dropdown-input__button");
		let dropInputLink = $(".dropdown-input__popup a");

		dropInputButton.on("click", function (e) {
			if (!$(this).hasClass("is-active")) {
				dropInputButton.removeClass("is-active");
				dropInputWrap.removeClass("is-active");
			}

			$(this).toggleClass("is-active");
			$(this).siblings(dropInputWrap).toggleClass("is-active");

			e.preventDefault();
			e.stopPropagation();
		});

		$(document).on("click", function () {
			dropInputWrap.removeClass("is-active");
			dropInputButton.removeClass("is-active");
		});

		dropInputLink.on("click", function (e) {
			dropInputWrap.removeClass("is-active");
			dropInputButton.removeClass("is-active");
			e.preventDefault();
		});
	}

	// Popovers
	if ($(".popover").length) {
		let popoverBtn = $(".popover__btn");
		let popoverPop = $(".popover__popup");

		popoverBtn.on("click", function (e) {
			if (!$(this).hasClass("is-active")) {
				popoverPop.removeClass("is-active");
				popoverBtn.removeClass("is-active");
			}

			$(this).toggleClass("is-active");
			$(this).next(popoverPop).toggleClass("is-active");
			e.stopPropagation();
		});
	}

	// Tooltip clickable
	if ($(".tooltip--clickable").length) {
		let tooltipClickable = $(".tooltip--clickable");
		let tooltipClickablePop = $(".tooltip--clickable .tooltip__popup");

		tooltipClickable.on("click", function () {
			$(this).toggleClass("is-active");
		});

		tooltipClickablePop.on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
	}

	// Progress bar
	if ($(".progress-bar").length) {
		let progressBar = $(".progress-bar");

		progressBar.each(function () {
			let valCalcCurrent =
				($(this).val() - $(this).attr("min")) /
				($(this).attr("max") - $(this).attr("min"));

			$(this).css(
				"background-image",
				"-webkit-gradient(linear, left top, right top, " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-fill)), " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-background))" +
					")",
			);
		});

		progressBar.on("input change", function () {
			let valCalcCurrent =
				($(this).val() - $(this).attr("min")) /
				($(this).attr("max") - $(this).attr("min"));
			let thisVal = $(this).val();

			$(this).css(
				"background-image",
				"-webkit-gradient(linear, left top, right top, " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-fill)), " +
					"color-stop(" +
					valCalcCurrent +
					", var(--input-range-background))" +
					")",
			);

			$(this)
				.parent()
				.find(".progress-bar__value")
				.text(thisVal + "%");
		});
	}

	// Tabs
	if ($(".tabs").length) {
		let tabButton = $(".tabs__button");
		let tabItems = $(".tabs__items");

		tabButton.on("click", function () {
			let id = this.id;
			let tabItem = $('.tabs__item[data-id="#' + id + '"]');

			if (!$(this).hasClass("tabs__button--first")) {
				$(this).parent().find(tabButton).removeClass("is-active");
				$(this).parent().next(tabItems).addClass("is-active");
				$(this).addClass("is-active");
				$(this)
					.parent()
					.next(tabItems)
					.find(".tabs__item")
					.removeClass("is-active");

				tabItem.addClass("is-active");
			} else {
				$(this).parent().find(tabButton).removeClass("is-active");
				$(this).addClass("is-active");
				$(this).parent().next(tabItems).removeClass("is-active");
				$(this)
					.parent()
					.next(tabItems)
					.find(".tabs__item")
					.removeClass("is-active");

				tabItem.addClass("is-active");
			}
		});
	}

	// Accordion
	if ($(".accordion").length) {
		let accordionBtn = $(".accordion__btn");

		accordionBtn.click(function () {
			$(this).toggleClass("is-active");
			$(this).next().slideToggle(100);
			$(this)
				.closest(".accordion")
				.find(accordionBtn)
				.not(this)
				.removeClass("is-active");
			$(this)
				.closest(".accordion")
				.find(accordionBtn)
				.not(this)
				.next()
				.slideUp(100)
				.removeClass("is-active");
		});
	}

	// Offcanvas
	if ($(".offcanvas").length) {
		let offcanvasBtn = $(".offcanvas__button");
		let offcanvasOverlay = $(".offcanvas__overlay");
		let offcanvas = $(".offcanvas");

		offcanvasBtn.on("click", function () {
			offcanvasOverlay.fadeIn();
			offcanvas.addClass("is-active");
		});

		$(document).on(
			"click",
			".offcanvas__overlay, .offcanvas__close",
			function () {
				offcanvasOverlay.fadeOut();
				offcanvas.removeClass("is-active");
			},
		);
	}

	// Notification
	if ($(".notification").length) {
		$(".notification__close").on("click", function () {
			$(this).closest(".notification").fadeOut(200);
		});
	}

	// Portlets
	if ($(".portlet").length) {
		$(".portlet__close").on("click", function () {
			$(this).closest(".portlet").fadeOut(200);
		});

		$(".portlet__actions-min").on("click", function () {
			$(this).closest(".portlet").find(".portlet__content").slideToggle(200);
			$(this).toggleClass("is-active");
		});
	}

	// Alerts
	if ($(".alert").length) {
		$(".alert__close").on("click", function () {
			$(this).closest(".alert").fadeOut(200);
		});
	}
});
