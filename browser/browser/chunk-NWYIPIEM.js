import {
  TooltipDirective,
  TooltipModule
} from "./chunk-D7IPSTS4.js";
import {
  TabDirective,
  TabsModule,
  TabsetComponent
} from "./chunk-36X3QJLK.js";
import {
  PagetitleComponent
} from "./chunk-WW5M2ABB.js";
import {
  Component,
  NgModule,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-BM6E27KQ.js";

// src/app/pages/blog/bloggrid/bloggrid.component.ts
var BloggridComponent = class _BloggridComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Blog" }, { label: "Blog Grid", active: true }];
  }
  static {
    this.\u0275fac = function BloggridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BloggridComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BloggridComponent, selectors: [["app-bloggrid"]], decls: 352, vars: 1, consts: [[1, "container-fluid"], ["title", "Blog Grid", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-9", "col-lg-8"], [1, "card"], [1, "nav-tabs", "nav-tabs-custom", "nav-justify-center", "pt-2"], ["heading", "All Post", 1, "mt-2"], [1, "row", "justify-content-center"], [1, "col-xl-8"], [1, "row", "align-items-center"], [1, "col-4"], [1, "mb-0"], [1, "col-8"], [1, ""], [1, "nav", "nav-pills", "justify-content-end"], [1, "nav-item"], ["href", "javascript: void(0);", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], ["placement", "top", "tooltip", "List", 1, "nav-item"], ["routerLink", "/blog/list", 1, "nav-link"], [1, "mdi", "mdi-format-list-bulleted"], ["placement", "top", "tooltip", "Grid", 1, "nav-item"], ["routerLink", "/blog/grid", 1, "nav-link", "active"], [1, "mdi", "mdi-view-grid-outline", "text-light"], [1, "mb-4"], [1, "col-sm-6"], [1, "card", "p-1", "border", "shadow-none"], [1, "p-3"], ["routerLink", "/blog/detail", 1, "text-dark"], [1, "text-muted", "mb-0"], [1, "position-relative"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "img-thumbnail"], [1, "list-inline"], [1, "list-inline-item", "me-3"], ["href", "javascript: void(0);", 1, "text-muted"], [1, "bx", "bx-purchase-tag-alt", "align-middle", "text-muted", "me-1"], [1, "bx", "bx-comment-dots", "align-middle", "text-muted", "me-1"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mdi", "mdi-arrow-right"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "img-thumbnail"], [1, "blog-play-icon"], ["href", "javascript: void(0);", 1, "avatar-sm", "d-block", "mx-auto"], [1, "avatar-title", "rounded-circle", "font-size-18"], [1, "mdi", "mdi-play"], ["src", "assets/images/small/img-1.jpg", "alt", "", 1, "img-thumbnail"], [1, "my-4"], [1, "text-center"], [1, "pagination", "justify-content-center", "pagination-rounded"], [1, "page-item", "disabled"], ["href", "javascript: void(0);", 1, "page-link"], [1, "mdi", "mdi-chevron-left"], [1, "page-item"], [1, "page-item", "active"], [1, "mdi", "mdi-chevron-right"], ["heading", "Archive", 1, "mt-2"], [1, "mt-5"], [1, "d-flex", "flex-wrap"], [1, "me-2"], [1, "ms-auto"], [1, "badge", "badge-soft-success", "badge-pill", "float-end", "ms-1", "font-size-12"], [1, "mt-2"], [1, "list-group", "list-group-flush"], ["routerLink", "/blog/detail", 1, "list-group-item", "text-muted"], [1, "mdi", "mdi-circle-medium", "me-1"], [1, "col-xl-3", "col-lg-4"], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], ["type", "text", "placeholder", "Search...", 1, "form-control", "rounded", "bg-light", "border-light"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "list-unstyled", "fw-medium"], ["href", "javascript: void(0);", 1, "text-muted", "py-2", "d-block"], [1, "mdi", "mdi-chevron-right", "me-1"], [1, "badge", "badge-soft-success", "badge-pill", "ms-1", "float-end", "font-size-12"], [1, "text-muted", "mb-2"], ["href", "javascript: void(0);", 1, "list-group-item", "text-muted", "py-3", "px-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/small/img-7.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "flex-grow-1", "overflow-hidden"], [1, "font-size-13", "text-truncate"], [1, "mb-0", "text-truncate"], ["src", "assets/images/small/img-4.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "d-flex", "flex-wrap", "gap-2", "widget-tag"], ["href", "javascript: void(0);", 1, "badge", "bg-light", "font-size-12"]], template: function BloggridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "tabset", 5)(6, "tab", 6)(7, "div", 7)(8, "div", 8)(9, "div")(10, "div", 9)(11, "div", 10)(12, "div")(13, "h5", 11);
        \u0275\u0275text(14, "Blog List");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "ul", 14)(18, "li", 15)(19, "a", 16);
        \u0275\u0275text(20, "View :");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li", 17)(22, "a", 18);
        \u0275\u0275element(23, "i", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "li", 20)(25, "a", 21);
        \u0275\u0275element(26, "i", 22);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(27, "hr", 23);
        \u0275\u0275elementStart(28, "div", 2)(29, "div", 24)(30, "div", 25)(31, "div", 26)(32, "h5")(33, "a", 27);
        \u0275\u0275text(34, "Beautiful Day with Friends");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 28);
        \u0275\u0275text(36, "10 Apr, 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 29);
        \u0275\u0275element(38, "img", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 26)(40, "ul", 31)(41, "li", 32)(42, "a", 33);
        \u0275\u0275element(43, "i", 34);
        \u0275\u0275text(44, " Project ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li", 32)(46, "a", 33);
        \u0275\u0275element(47, "i", 35);
        \u0275\u0275text(48, " 12 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div")(52, "a", 36);
        \u0275\u0275text(53, "Read more ");
        \u0275\u0275element(54, "i", 37);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(55, "div", 24)(56, "div", 25)(57, "div", 26)(58, "h5")(59, "a", 27);
        \u0275\u0275text(60, "Drawing a sketch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "p", 28);
        \u0275\u0275text(62, "24 Mar, 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 29);
        \u0275\u0275element(64, "img", 38);
        \u0275\u0275elementStart(65, "div", 39)(66, "a", 40)(67, "span", 41);
        \u0275\u0275element(68, "i", 42);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "div", 26)(70, "ul", 31)(71, "li", 32)(72, "a", 33);
        \u0275\u0275element(73, "i", 34);
        \u0275\u0275text(74, " Development ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "li", 32)(76, "a", 33);
        \u0275\u0275element(77, "i", 35);
        \u0275\u0275text(78, " 08 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "p");
        \u0275\u0275text(80, "At vero eos et accusamus et iusto odio dignissimos ducimus quos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div")(82, "a", 36);
        \u0275\u0275text(83, "Read more ");
        \u0275\u0275element(84, "i", 37);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(85, "div", 2)(86, "div", 24)(87, "div", 25)(88, "div", 26)(89, "h5")(90, "a", 27);
        \u0275\u0275text(91, "Riding bike on road");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "p", 28);
        \u0275\u0275text(93, "10 Apr, 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 29);
        \u0275\u0275element(95, "img", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 26)(97, "ul", 31)(98, "li", 32)(99, "a", 33);
        \u0275\u0275element(100, "i", 34);
        \u0275\u0275text(101, " Travel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "li", 32)(103, "a", 33);
        \u0275\u0275element(104, "i", 35);
        \u0275\u0275text(105, " 08 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "p");
        \u0275\u0275text(107, "Itaque earum rerum hic tenetur a sapiente delectus ut aut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div")(109, "a", 36);
        \u0275\u0275text(110, "Read more ");
        \u0275\u0275element(111, "i", 37);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(112, "div", 24)(113, "div", 25)(114, "div", 26)(115, "h5")(116, "a", 27);
        \u0275\u0275text(117, "Project discussion with team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "p", 28);
        \u0275\u0275text(119, "24 Mar, 2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 29);
        \u0275\u0275element(121, "img", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 26)(123, "ul", 31)(124, "li", 32)(125, "a", 33);
        \u0275\u0275element(126, "i", 34);
        \u0275\u0275text(127, " Development ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "li", 32)(129, "a", 33);
        \u0275\u0275element(130, "i", 35);
        \u0275\u0275text(131, " 08 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133, "Sed ut perspiciatis unde omnis iste eaque natus error sit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div")(135, "a", 36);
        \u0275\u0275text(136, "Read more ");
        \u0275\u0275element(137, "i", 37);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(138, "hr", 44);
        \u0275\u0275elementStart(139, "div", 45)(140, "ul", 46)(141, "li", 47)(142, "a", 48);
        \u0275\u0275element(143, "i", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "li", 50)(145, "a", 48);
        \u0275\u0275text(146, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "li", 51)(148, "a", 48);
        \u0275\u0275text(149, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "li", 50)(151, "a", 48);
        \u0275\u0275text(152, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "li", 50)(154, "a", 48);
        \u0275\u0275text(155, "...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "li", 50)(157, "a", 48);
        \u0275\u0275text(158, "10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "li", 50)(160, "a", 48);
        \u0275\u0275element(161, "i", 52);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(162, "tab", 53)(163, "div", 7)(164, "div", 8)(165, "h5");
        \u0275\u0275text(166, "Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 54)(168, "div", 55)(169, "div", 56)(170, "h4");
        \u0275\u0275text(171, "2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(172, "div", 57)(173, "span", 58);
        \u0275\u0275text(174, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(175, "hr", 59);
        \u0275\u0275elementStart(176, "div", 60)(177, "a", 61);
        \u0275\u0275element(178, "i", 62);
        \u0275\u0275text(179, " Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "a", 61);
        \u0275\u0275element(181, "i", 62);
        \u0275\u0275text(182, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "a", 61);
        \u0275\u0275element(184, "i", 62);
        \u0275\u0275text(185, " Project discussion with team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 54)(187, "div", 55)(188, "div", 56)(189, "h4");
        \u0275\u0275text(190, "2019");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "div", 57)(192, "span", 58);
        \u0275\u0275text(193, "06");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(194, "hr", 59);
        \u0275\u0275elementStart(195, "div", 60)(196, "a", 61);
        \u0275\u0275element(197, "i", 62);
        \u0275\u0275text(198, " Coffee with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "a", 61);
        \u0275\u0275element(200, "i", 62);
        \u0275\u0275text(201, " Neque porro quisquam est");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "a", 61);
        \u0275\u0275element(203, "i", 62);
        \u0275\u0275text(204, " Quis autem vel eum iure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "a", 61);
        \u0275\u0275element(206, "i", 62);
        \u0275\u0275text(207, " Cras mi eu turpis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "a", 61);
        \u0275\u0275element(209, "i", 62);
        \u0275\u0275text(210, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "a", 61);
        \u0275\u0275element(212, "i", 62);
        \u0275\u0275text(213, " Project discussion with team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(214, "div", 54)(215, "div", 55)(216, "div", 56)(217, "h4");
        \u0275\u0275text(218, "2018");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(219, "div", 57)(220, "span", 58);
        \u0275\u0275text(221, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(222, "hr", 59);
        \u0275\u0275elementStart(223, "div", 60)(224, "a", 61);
        \u0275\u0275element(225, "i", 62);
        \u0275\u0275text(226, " Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(227, "a", 61);
        \u0275\u0275element(228, "i", 62);
        \u0275\u0275text(229, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "a", 61);
        \u0275\u0275element(231, "i", 62);
        \u0275\u0275text(232, " Project discussion with team");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(233, "div", 63)(234, "div", 4)(235, "div", 64)(236, "div", 65)(237, "p", 66);
        \u0275\u0275text(238, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 29);
        \u0275\u0275element(240, "input", 67)(241, "i", 68);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(242, "hr", 44);
        \u0275\u0275elementStart(243, "div")(244, "p", 66);
        \u0275\u0275text(245, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "ul", 69)(247, "li")(248, "a", 70);
        \u0275\u0275element(249, "i", 71);
        \u0275\u0275text(250, " Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "li")(252, "a", 70);
        \u0275\u0275element(253, "i", 71);
        \u0275\u0275text(254, " Development ");
        \u0275\u0275elementStart(255, "span", 58);
        \u0275\u0275text(256, "04");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(257, "li")(258, "a", 70);
        \u0275\u0275element(259, "i", 71);
        \u0275\u0275text(260, " Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "li")(262, "a", 70);
        \u0275\u0275element(263, "i", 71);
        \u0275\u0275text(264, " Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "li")(266, "a", 70);
        \u0275\u0275element(267, "i", 71);
        \u0275\u0275text(268, " Travel");
        \u0275\u0275elementStart(269, "span", 72);
        \u0275\u0275text(270, "12");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(271, "hr", 44);
        \u0275\u0275elementStart(272, "div")(273, "p", 66);
        \u0275\u0275text(274, "Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "ul", 69)(276, "li")(277, "a", 70);
        \u0275\u0275element(278, "i", 71);
        \u0275\u0275text(279, " 2020 ");
        \u0275\u0275elementStart(280, "span", 58);
        \u0275\u0275text(281, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(282, "li")(283, "a", 70);
        \u0275\u0275element(284, "i", 71);
        \u0275\u0275text(285, " 2019 ");
        \u0275\u0275elementStart(286, "span", 58);
        \u0275\u0275text(287, "06");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(288, "li")(289, "a", 70);
        \u0275\u0275element(290, "i", 71);
        \u0275\u0275text(291, " 2018 ");
        \u0275\u0275elementStart(292, "span", 58);
        \u0275\u0275text(293, "05");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(294, "hr", 44);
        \u0275\u0275elementStart(295, "div")(296, "p", 73);
        \u0275\u0275text(297, "Popular Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "div", 60)(299, "a", 74)(300, "div", 75)(301, "div", 76);
        \u0275\u0275element(302, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "div", 78)(304, "h5", 79);
        \u0275\u0275text(305, "Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(306, "p", 80);
        \u0275\u0275text(307, "10 Apr, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(308, "a", 74)(309, "div", 75)(310, "div", 76);
        \u0275\u0275element(311, "img", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "div", 78)(313, "h5", 79);
        \u0275\u0275text(314, "Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(315, "p", 80);
        \u0275\u0275text(316, "24 Mar, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(317, "a", 74)(318, "div", 75)(319, "div", 76);
        \u0275\u0275element(320, "img", 82);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "div", 78)(322, "h5", 79);
        \u0275\u0275text(323, "Project discussion with team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(324, "p", 80);
        \u0275\u0275text(325, "11 Mar, 2020");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(326, "hr", 44);
        \u0275\u0275elementStart(327, "div")(328, "p", 66);
        \u0275\u0275text(329, "Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(330, "div", 83)(331, "div")(332, "a", 84);
        \u0275\u0275text(333, "Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(334, "div")(335, "a", 84);
        \u0275\u0275text(336, "Development");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(337, "div")(338, "a", 84);
        \u0275\u0275text(339, "Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(340, "div")(341, "a", 84);
        \u0275\u0275text(342, "Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(343, "div")(344, "a", 84);
        \u0275\u0275text(345, "Travel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(346, "div")(347, "a", 84);
        \u0275\u0275text(348, "Lifestyle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(349, "div")(350, "a", 84);
        \u0275\u0275text(351, "Photography");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent, TabsModule, TabDirective, TabsetComponent, RouterModule, RouterLink, TooltipModule, TooltipDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BloggridComponent, [{
    type: Component,
    args: [{ selector: "app-bloggrid", imports: [PagetitleComponent, TabsModule, RouterModule, TooltipModule], template: '<div class="container-fluid">\r\n    <app-page-title title="Blog Grid" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-xl-9 col-lg-8">\r\n            <div class="card">\r\n                <!-- Nav tabs -->\r\n                <tabset  class="nav-tabs nav-tabs-custom nav-justify-center pt-2">\r\n                    <tab heading="All Post" class="mt-2">\r\n                        <div class="row justify-content-center">\r\n                            <div class="col-xl-8">\r\n                                <div>\r\n                                    <div class="row align-items-center">\r\n                                        <div class="col-4">\r\n                                            <div>\r\n                                                <h5 class="mb-0">Blog List</h5>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-8">\r\n                                            <div class="">\r\n                                                <ul class="nav nav-pills justify-content-end">\r\n                                                    <li class="nav-item">\r\n                                                        <a class="nav-link disabled" href="javascript: void(0);"\r\n                                                            tabindex="-1" aria-disabled="true">View :</a>\r\n                                                    </li>\r\n                                                  \r\n                                                    <li class="nav-item" placement="top" tooltip="List">\r\n                                                        <a class="nav-link" routerLink="/blog/list">\r\n                                                            <i class="mdi mdi-format-list-bulleted"></i>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class="nav-item" placement="top" tooltip="Grid">\r\n                                                        <a class="nav-link active" routerLink="/blog/grid">\r\n                                                            <i class="mdi mdi-view-grid-outline  text-light"></i>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- end row -->\r\n\r\n                                    <hr class="mb-4">\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-sm-6">\r\n                                            <div class="card p-1 border shadow-none">\r\n                                                <div class="p-3">\r\n                                                    <h5><a routerLink="/blog/detail" class="text-dark">Beautiful Day\r\n                                                            with Friends</a></h5>\r\n                                                    <p class="text-muted mb-0">10 Apr, 2020</p>\r\n                                                </div>\r\n\r\n                                                <div class="position-relative">\r\n                                                    <img src="assets/images/small/img-2.jpg" alt=""\r\n                                                        class="img-thumbnail">\r\n                                                </div>\r\n\r\n                                                <div class="p-3">\r\n                                                    <ul class="list-inline">\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                                Project\r\n                                                            </a>\r\n                                                        </li>\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                                12 Comments\r\n                                                            </a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet\r\n                                                    </p>\r\n\r\n                                                    <div>\r\n                                                        <a href="javascript: void(0);" class="text-primary">Read more <i\r\n                                                                class="mdi mdi-arrow-right"></i></a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-6">\r\n                                            <div class="card p-1 border shadow-none">\r\n                                                <div class="p-3">\r\n                                                    <h5><a routerLink="/blog/detail" class="text-dark">Drawing a\r\n                                                            sketch</a></h5>\r\n                                                    <p class="text-muted mb-0">24 Mar, 2020</p>\r\n                                                </div>\r\n\r\n                                                <div class="position-relative">\r\n                                                    <img src="assets/images/small/img-6.jpg" alt=""\r\n                                                        class="img-thumbnail">\r\n\r\n                                                    <div class="blog-play-icon">\r\n                                                        <a href="javascript: void(0);"\r\n                                                            class="avatar-sm d-block mx-auto">\r\n                                                            <span class="avatar-title rounded-circle font-size-18"><i\r\n                                                                    class="mdi mdi-play"></i></span>\r\n                                                        </a>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class="p-3">\r\n                                                    <ul class="list-inline">\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                                Development\r\n                                                            </a>\r\n                                                        </li>\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                                08 Comments\r\n                                                            </a>\r\n                                                        </li>\r\n                                                    </ul>\r\n\r\n                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus quos\r\n                                                    </p>\r\n\r\n                                                    <div>\r\n                                                        <a href="javascript: void(0);" class="text-primary">Read more <i\r\n                                                                class="mdi mdi-arrow-right"></i></a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class="row">\r\n                                        <div class="col-sm-6">\r\n                                            <div class="card p-1 border shadow-none">\r\n                                                <div class="p-3">\r\n                                                    <h5><a routerLink="/blog/detail" class="text-dark">Riding bike on\r\n                                                            road</a></h5>\r\n                                                    <p class="text-muted mb-0">10 Apr, 2020</p>\r\n                                                </div>\r\n\r\n                                                <div class="position-relative">\r\n                                                    <img src="assets/images/small/img-1.jpg" alt=""\r\n                                                        class="img-thumbnail">\r\n                                                </div>\r\n\r\n                                                <div class="p-3">\r\n                                                    <ul class="list-inline">\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                                Travel\r\n                                                            </a>\r\n                                                        </li>\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                                08 Comments\r\n                                                            </a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                    <p>Itaque earum rerum hic tenetur a sapiente delectus ut aut</p>\r\n\r\n                                                    <div>\r\n                                                        <a href="javascript: void(0);" class="text-primary">Read more <i\r\n                                                                class="mdi mdi-arrow-right"></i></a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-6">\r\n                                            <div class="card p-1 border shadow-none">\r\n                                                <div class="p-3">\r\n                                                    <h5><a routerLink="/blog/detail" class="text-dark">Project\r\n                                                            discussion with team</a></h5>\r\n                                                    <p class="text-muted mb-0">24 Mar, 2020</p>\r\n                                                </div>\r\n\r\n                                                <div class="position-relative">\r\n                                                    <img src="assets/images/small/img-2.jpg" alt=""\r\n                                                        class="img-thumbnail">\r\n\r\n                                                </div>\r\n\r\n                                                <div class="p-3">\r\n                                                    <ul class="list-inline">\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                                Development\r\n                                                            </a>\r\n                                                        </li>\r\n                                                        <li class="list-inline-item me-3">\r\n                                                            <a href="javascript: void(0);" class="text-muted">\r\n                                                                <i\r\n                                                                    class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                                08 Comments\r\n                                                            </a>\r\n                                                        </li>\r\n                                                    </ul>\r\n\r\n                                                    <p>Sed ut perspiciatis unde omnis iste eaque natus error sit</p>\r\n\r\n                                                    <div>\r\n                                                        <a href="javascript: void(0);" class="text-primary">Read more <i\r\n                                                                class="mdi mdi-arrow-right"></i></a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <hr class="my-4">\r\n\r\n                                    <div class="text-center">\r\n                                        <ul class="pagination justify-content-center pagination-rounded">\r\n                                            <li class="page-item disabled">\r\n                                                <a href="javascript: void(0);" class="page-link"><i\r\n                                                        class="mdi mdi-chevron-left"></i></a>\r\n                                            </li>\r\n                                            <li class="page-item">\r\n                                                <a href="javascript: void(0);" class="page-link">1</a>\r\n                                            </li>\r\n                                            <li class="page-item active">\r\n                                                <a href="javascript: void(0);" class="page-link">2</a>\r\n                                            </li>\r\n                                            <li class="page-item">\r\n                                                <a href="javascript: void(0);" class="page-link">3</a>\r\n                                            </li>\r\n                                            <li class="page-item">\r\n                                                <a href="javascript: void(0);" class="page-link">...</a>\r\n                                            </li>\r\n                                            <li class="page-item">\r\n                                                <a href="javascript: void(0);" class="page-link">10</a>\r\n                                            </li>\r\n                                            <li class="page-item">\r\n                                                <a href="javascript: void(0);" class="page-link"><i\r\n                                                        class="mdi mdi-chevron-right"></i></a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                    <tab heading="Archive" class="mt-2">\r\n                        <div class="row justify-content-center">\r\n                            <div class="col-xl-8">\r\n                                <h5>Archive</h5>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2020</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span\r\n                                                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">03</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Beautiful Day with\r\n                                            Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2019</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span\r\n                                                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">06</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Coffee with Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Neque porro quisquam\r\n                                            est</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Quis autem vel eum\r\n                                            iure</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Cras mi eu turpis</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2018</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span\r\n                                                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">03</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Beautiful Day with\r\n                                            Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i\r\n                                                class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-xl-3 col-lg-4">\r\n            <div class="card">\r\n                <div class="card-body p-4">\r\n                    <div class="search-box">\r\n                        <p class="text-muted">Search</p>\r\n                        <div class="position-relative">\r\n                            <input type="text" class="form-control rounded bg-light border-light"\r\n                                placeholder="Search...">\r\n                            <i class="mdi mdi-magnify search-icon"></i>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Categories</p>\r\n\r\n                        <ul class="list-unstyled fw-medium">\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    Design</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    Development <span\r\n                                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">04</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    Business</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    Project</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    Travel<span\r\n                                        class="badge badge-soft-success badge-pill ms-1 float-end font-size-12">12</span></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Archive</p>\r\n\r\n                        <ul class="list-unstyled fw-medium">\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    2020 <span\r\n                                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">03</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    2019 <span\r\n                                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">06</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i\r\n                                        class="mdi mdi-chevron-right me-1"></i>\r\n                                    2018 <span\r\n                                        class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">05</span></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted mb-2">Popular Posts</p>\r\n\r\n                        <div class="list-group list-group-flush">\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-7.jpg" alt=""\r\n                                            class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Beautiful Day with Friends</h5>\r\n                                        <p class="mb-0 text-truncate">10 Apr, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-4.jpg" alt=""\r\n                                            class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Drawing a sketch</h5>\r\n                                        <p class="mb-0 text-truncate">24 Mar, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-6.jpg" alt=""\r\n                                            class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Project discussion with team</h5>\r\n                                        <p class="mb-0 text-truncate">11 Mar, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Tags</p>\r\n\r\n                        <div class="d-flex flex-wrap gap-2 widget-tag">\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Design</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Development</a>\r\n                            </div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Business</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Project</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Travel</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Lifestyle</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Photography</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BloggridComponent, { className: "BloggridComponent", filePath: "src/app/pages/blog/bloggrid/bloggrid.component.ts", lineNumber: 14 });
})();

// src/app/pages/blog/bloglist/bloglist.component.ts
var BloglistComponent = class _BloglistComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Blog" }, { label: "Blog List", active: true }];
  }
  static {
    this.\u0275fac = function BloglistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BloglistComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BloglistComponent, selectors: [["app-bloglist"]], decls: 294, vars: 1, consts: [[1, "container-fluid"], ["title", "Blog List", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-9", "col-lg-8"], [1, "card"], [1, "nav-tabs", "nav-tabs-custom", "nav-justify-center", "pt-2"], ["heading", "All Post", 1, "mt-2"], [1, "row", "justify-content-center"], [1, "col-xl-8"], [1, "row", "align-items-center"], [1, "col-4"], [1, "mb-0"], [1, "col-8"], [1, "nav", "nav-pills", "justify-content-end"], [1, "nav-item"], ["href", "javascript: void(0);", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], ["tooltip", "List", 1, "nav-item"], ["routerLink", "/blog/list", 1, "nav-link", "active"], [1, "mdi", "mdi-format-list-bulleted", "text-light"], ["tooltip", "Grid", 1, "nav-item"], ["routerLink", "/blog/grid", 1, "nav-link"], [1, "mdi", "mdi-view-grid-outline"], [1, "mb-4"], ["routerLink", "/blog/detail", 1, "text-dark"], [1, "text-muted"], [1, "position-relative", "mb-3"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "img-thumbnail"], [1, "list-inline"], [1, "list-inline-item", "me-3"], ["href", "javascript: void(0);", 1, "text-muted"], [1, "bx", "bx-purchase-tag-alt", "align-middle", "text-muted", "me-1"], [1, "bx", "bx-comment-dots", "align-middle", "text-muted", "me-1"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mdi", "mdi-arrow-right"], [1, "my-5"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "img-thumbnail"], [1, "blog-play-icon"], ["href", "javascript: void(0);", 1, "avatar-sm", "d-block", "mx-auto"], [1, "avatar-title", "rounded-circle", "font-size-18"], [1, "mdi", "mdi-play"], [1, "text-center"], [1, "pagination", "justify-content-center", "pagination-rounded"], [1, "page-item", "disabled"], ["href", "javascript: void(0);", 1, "page-link"], [1, "mdi", "mdi-chevron-left"], [1, "page-item"], [1, "page-item", "active"], [1, "mdi", "mdi-chevron-right"], ["heading", "Archive", 1, "mt-2"], [1, "mt-5"], [1, "d-flex", "flex-wrap"], [1, "me-2"], [1, "ms-auto"], [1, "badge", "badge-soft-success", "rounded-pill", "float-end", "ms-1", "font-size-12"], [1, "mt-2"], [1, "list-group", "list-group-flush"], ["routerLink", "/blog/detail", 1, "list-group-item", "text-muted"], [1, "mdi", "mdi-circle-medium", "me-1"], [1, "col-xl-3", "col-lg-4"], [1, "card-body", "p-4"], [1, "search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control", "rounded", "bg-light", "border-light"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "my-4"], [1, "list-unstyled", "fw-medium"], ["href", "javascript: void(0);", 1, "text-muted", "py-2", "d-block"], [1, "mdi", "mdi-chevron-right", "me-1"], [1, "badge", "badge-soft-success", "badge-pill", "float-end", "ms-1", "font-size-12"], [1, "badge", "badge-soft-success", "badge-pill", "ms-1", "float-end", "font-size-12"], [1, "text-muted", "mb-2"], ["href", "javascript: void(0);", 1, "list-group-item", "text-muted", "py-3", "px-2"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], ["src", "assets/images/small/img-7.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "flex-grow-1", "overflow-hidden"], [1, "font-size-13", "text-truncate"], [1, "mb-0", "text-truncate"], ["src", "assets/images/small/img-4.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "d-flex", "flex-wrap", "gap-2", "widget-tag"], ["href", "javascript: void(0);", 1, "badge", "bg-light", "font-size-12"]], template: function BloglistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "tabset", 5)(6, "tab", 6)(7, "div")(8, "div", 7)(9, "div", 8)(10, "div")(11, "div", 9)(12, "div", 10)(13, "div")(14, "h5", 11);
        \u0275\u0275text(15, "Blog List");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div")(18, "ul", 13)(19, "li", 14)(20, "a", 15);
        \u0275\u0275text(21, "View :");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li", 16)(23, "a", 17);
        \u0275\u0275element(24, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li", 19)(26, "a", 20);
        \u0275\u0275element(27, "i", 21);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(28, "hr", 22);
        \u0275\u0275elementStart(29, "div")(30, "h5")(31, "a", 23);
        \u0275\u0275text(32, "Beautiful Day with Friends");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p", 24);
        \u0275\u0275text(34, "10 Apr, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 25);
        \u0275\u0275element(36, "img", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "ul", 27)(38, "li", 28)(39, "a", 29);
        \u0275\u0275element(40, "i", 30);
        \u0275\u0275text(41, " Project ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li", 28)(43, "a", 29);
        \u0275\u0275element(44, "i", 31);
        \u0275\u0275text(45, " 12 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Ut enim ad minima veniam, quis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div")(49, "a", 32);
        \u0275\u0275text(50, "Read more ");
        \u0275\u0275element(51, "i", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(52, "hr", 34);
        \u0275\u0275elementStart(53, "div")(54, "h5")(55, "a", 23);
        \u0275\u0275text(56, "Project discussion with team");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "p", 24);
        \u0275\u0275text(58, "24 Mar, 2020");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 25);
        \u0275\u0275element(60, "img", 35);
        \u0275\u0275elementStart(61, "div", 36)(62, "a", 37)(63, "span", 38);
        \u0275\u0275element(64, "i", 39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "ul", 27)(66, "li", 28)(67, "a", 29);
        \u0275\u0275element(68, "i", 30);
        \u0275\u0275text(69, " Development ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "li", 28)(71, "a", 29);
        \u0275\u0275element(72, "i", 31);
        \u0275\u0275text(73, " 08 Comments ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores similique sunt in culpa qui officia deserunt mollitia animi est");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div")(77, "a", 32);
        \u0275\u0275text(78, "Read more ");
        \u0275\u0275element(79, "i", 33);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(80, "hr", 34);
        \u0275\u0275elementStart(81, "div", 40)(82, "ul", 41)(83, "li", 42)(84, "a", 43);
        \u0275\u0275element(85, "i", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "li", 45)(87, "a", 43);
        \u0275\u0275text(88, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "li", 46)(90, "a", 43);
        \u0275\u0275text(91, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "li", 45)(93, "a", 43);
        \u0275\u0275text(94, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "li", 45)(96, "a", 43);
        \u0275\u0275text(97, "...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "li", 45)(99, "a", 43);
        \u0275\u0275text(100, "10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "li", 45)(102, "a", 43);
        \u0275\u0275element(103, "i", 47);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(104, "tab", 48)(105, "div", 7)(106, "div", 8)(107, "h5");
        \u0275\u0275text(108, "Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 49)(110, "div", 50)(111, "div", 51)(112, "h4");
        \u0275\u0275text(113, "2020");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 52)(115, "span", 53);
        \u0275\u0275text(116, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(117, "hr", 54);
        \u0275\u0275elementStart(118, "div", 55)(119, "a", 56);
        \u0275\u0275element(120, "i", 57);
        \u0275\u0275text(121, " Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "a", 56);
        \u0275\u0275element(123, "i", 57);
        \u0275\u0275text(124, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "a", 56);
        \u0275\u0275element(126, "i", 57);
        \u0275\u0275text(127, " Project discussion with team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(128, "div", 49)(129, "div", 50)(130, "div", 51)(131, "h4");
        \u0275\u0275text(132, "2019");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 52)(134, "span", 53);
        \u0275\u0275text(135, "06");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(136, "hr", 54);
        \u0275\u0275elementStart(137, "div", 55)(138, "a", 56);
        \u0275\u0275element(139, "i", 57);
        \u0275\u0275text(140, " Coffee with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "a", 56);
        \u0275\u0275element(142, "i", 57);
        \u0275\u0275text(143, " Neque porro quisquam est");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "a", 56);
        \u0275\u0275element(145, "i", 57);
        \u0275\u0275text(146, " Quis autem vel eum iure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "a", 56);
        \u0275\u0275element(148, "i", 57);
        \u0275\u0275text(149, " Cras mi eu turpis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "a", 56);
        \u0275\u0275element(151, "i", 57);
        \u0275\u0275text(152, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "a", 56);
        \u0275\u0275element(154, "i", 57);
        \u0275\u0275text(155, " Project discussion with team");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(156, "div", 49)(157, "div", 50)(158, "div", 51)(159, "h4");
        \u0275\u0275text(160, "2018");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div", 52)(162, "span", 53);
        \u0275\u0275text(163, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(164, "hr", 54);
        \u0275\u0275elementStart(165, "div", 55)(166, "a", 56);
        \u0275\u0275element(167, "i", 57);
        \u0275\u0275text(168, " Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "a", 56);
        \u0275\u0275element(170, "i", 57);
        \u0275\u0275text(171, " Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "a", 56);
        \u0275\u0275element(173, "i", 57);
        \u0275\u0275text(174, " Project discussion with team");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(175, "div", 58)(176, "div", 4)(177, "div", 59)(178, "div", 60)(179, "p", 24);
        \u0275\u0275text(180, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 61);
        \u0275\u0275element(182, "input", 62)(183, "i", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(184, "hr", 64);
        \u0275\u0275elementStart(185, "div")(186, "p", 24);
        \u0275\u0275text(187, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "ul", 65)(189, "li")(190, "a", 66);
        \u0275\u0275element(191, "i", 67);
        \u0275\u0275text(192, " Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "li")(194, "a", 66);
        \u0275\u0275element(195, "i", 67);
        \u0275\u0275text(196, " Development ");
        \u0275\u0275elementStart(197, "span", 68);
        \u0275\u0275text(198, "04");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(199, "li")(200, "a", 66);
        \u0275\u0275element(201, "i", 67);
        \u0275\u0275text(202, " Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "li")(204, "a", 66);
        \u0275\u0275element(205, "i", 67);
        \u0275\u0275text(206, " Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(207, "li")(208, "a", 66);
        \u0275\u0275element(209, "i", 67);
        \u0275\u0275text(210, " Travel");
        \u0275\u0275elementStart(211, "span", 69);
        \u0275\u0275text(212, "12");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(213, "hr", 64);
        \u0275\u0275elementStart(214, "div")(215, "p", 24);
        \u0275\u0275text(216, "Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "ul", 65)(218, "li")(219, "a", 66);
        \u0275\u0275element(220, "i", 67);
        \u0275\u0275text(221, " 2020 ");
        \u0275\u0275elementStart(222, "span", 68);
        \u0275\u0275text(223, "03");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(224, "li")(225, "a", 66);
        \u0275\u0275element(226, "i", 67);
        \u0275\u0275text(227, " 2019 ");
        \u0275\u0275elementStart(228, "span", 68);
        \u0275\u0275text(229, "06");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(230, "li")(231, "a", 66);
        \u0275\u0275element(232, "i", 67);
        \u0275\u0275text(233, " 2018 ");
        \u0275\u0275elementStart(234, "span", 68);
        \u0275\u0275text(235, "05");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(236, "hr", 64);
        \u0275\u0275elementStart(237, "div")(238, "p", 70);
        \u0275\u0275text(239, "Popular Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(240, "div", 55)(241, "a", 71)(242, "div", 72)(243, "div", 73);
        \u0275\u0275element(244, "img", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "div", 75)(246, "h5", 76);
        \u0275\u0275text(247, "Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "p", 77);
        \u0275\u0275text(249, "10 Apr, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(250, "a", 71)(251, "div", 72)(252, "div", 73);
        \u0275\u0275element(253, "img", 78);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "div", 75)(255, "h5", 76);
        \u0275\u0275text(256, "Drawing a sketch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "p", 77);
        \u0275\u0275text(258, "24 Mar, 2020");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(259, "a", 71)(260, "div", 72)(261, "div", 73);
        \u0275\u0275element(262, "img", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "div", 75)(264, "h5", 76);
        \u0275\u0275text(265, "Project discussion with team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "p", 77);
        \u0275\u0275text(267, "11 Mar, 2020");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(268, "hr", 64);
        \u0275\u0275elementStart(269, "div")(270, "p", 24);
        \u0275\u0275text(271, "Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "div", 80)(273, "div")(274, "a", 81);
        \u0275\u0275text(275, "Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(276, "div")(277, "a", 81);
        \u0275\u0275text(278, "Development");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(279, "div")(280, "a", 81);
        \u0275\u0275text(281, "Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(282, "div")(283, "a", 81);
        \u0275\u0275text(284, "Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div")(286, "a", 81);
        \u0275\u0275text(287, "Travel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "div")(289, "a", 81);
        \u0275\u0275text(290, "Lifestyle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(291, "div")(292, "a", 81);
        \u0275\u0275text(293, "Photography");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent, TabsModule, TabDirective, TabsetComponent, RouterModule, RouterLink, TooltipModule, TooltipDirective], styles: ["\n\n.blog-card[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  align-items: end;\n  justify-content: flex-end;\n}\n.blog-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  top: 10px;\n}\n.blog-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0 0;\n}\n/*# sourceMappingURL=bloglist.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BloglistComponent, [{
    type: Component,
    args: [{ selector: "app-bloglist", imports: [PagetitleComponent, TabsModule, RouterModule, TooltipModule], template: '<div class="container-fluid">\r\n    <app-page-title title="Blog List" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-xl-9 col-lg-8">\r\n            <div class="card">\r\n                <!-- Nav tabs -->\r\n                <tabset class="nav-tabs nav-tabs-custom nav-justify-center  pt-2">\r\n                    <tab heading="All Post" class="mt-2">\r\n                        <div>\r\n                            <div class="row justify-content-center">\r\n                                <div class="col-xl-8">\r\n                                    <div>\r\n                                        <div class="row align-items-center">\r\n                                            <div class="col-4">\r\n                                                <div>\r\n                                                    <h5 class="mb-0">Blog List</h5>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class="col-8">\r\n                                                <div>\r\n                                                    <ul class="nav nav-pills justify-content-end">\r\n                                                        <li class="nav-item">\r\n                                                            <a class="nav-link disabled" href="javascript: void(0);" tabindex="-1" aria-disabled="true">View :</a>\r\n                                                        </li>\r\n                                                        <li class="nav-item" tooltip="List">\r\n                                                            <a class="nav-link active" routerLink="/blog/list">\r\n                                                                <i class="mdi mdi-format-list-bulleted text-light"></i>\r\n                                                            </a>\r\n                                                        </li>\r\n                                                        <li class="nav-item" tooltip="Grid">\r\n                                                            <a class="nav-link" routerLink="/blog/grid">\r\n                                                                <i class="mdi mdi-view-grid-outline"></i>\r\n                                                            </a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- end row -->\r\n\r\n                                        <hr class="mb-4">\r\n\r\n                                        <div>\r\n                                            <h5><a routerLink="/blog/detail" class="text-dark">Beautiful Day with\r\n                                                    Friends</a></h5>\r\n                                            <p class="text-muted">10 Apr, 2020</p>\r\n\r\n                                            <div class="position-relative mb-3">\r\n                                                <img src="assets/images/small/img-2.jpg" alt="" class="img-thumbnail">\r\n                                            </div>\r\n\r\n                                            <ul class="list-inline">\r\n                                                <li class="list-inline-item me-3">\r\n                                                    <a href="javascript: void(0);" class="text-muted">\r\n                                                        <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                        Project\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class="list-inline-item me-3">\r\n                                                    <a href="javascript: void(0);" class="text-muted">\r\n                                                        <i class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                        12 Comments\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\r\n                                                consectetur, adipisci velit, aliquam quaerat voluptatem. Ut enim ad\r\n                                                minima veniam, quis</p>\r\n\r\n                                            <div>\r\n                                                <a href="javascript: void(0);" class="text-primary">Read more <i class="mdi mdi-arrow-right"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <hr class="my-5">\r\n\r\n                                        <div>\r\n                                            <h5><a routerLink="/blog/detail" class="text-dark">Project discussion with\r\n                                                    team</a></h5>\r\n                                            <p class="text-muted">24 Mar, 2020</p>\r\n\r\n                                            <div class="position-relative mb-3">\r\n                                                <img src="assets/images/small/img-6.jpg" alt="" class="img-thumbnail">\r\n\r\n                                                <div class="blog-play-icon">\r\n                                                    <a href="javascript: void(0);" class="avatar-sm d-block mx-auto">\r\n                                                        <span class="avatar-title rounded-circle font-size-18"><i class="mdi mdi-play"></i></span>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <ul class="list-inline">\r\n                                                <li class="list-inline-item me-3">\r\n                                                    <a href="javascript: void(0);" class="text-muted">\r\n                                                        <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                        Development\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class="list-inline-item me-3">\r\n                                                    <a href="javascript: void(0);" class="text-muted">\r\n                                                        <i class="bx bx-comment-dots align-middle text-muted me-1"></i>\r\n                                                        08 Comments\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n\r\n                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\r\n                                                praesentium voluptatum deleniti atque corrupti quos dolores similique\r\n                                                sunt in culpa qui officia deserunt mollitia animi est</p>\r\n\r\n                                            <div>\r\n                                                <a href="javascript: void(0);" class="text-primary">Read more <i class="mdi mdi-arrow-right"></i></a>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <hr class="my-5">\r\n\r\n                                        <div class="text-center">\r\n                                            <ul class="pagination justify-content-center pagination-rounded">\r\n                                                <li class="page-item disabled">\r\n                                                    <a href="javascript: void(0);" class="page-link"><i class="mdi mdi-chevron-left"></i></a>\r\n                                                </li>\r\n                                                <li class="page-item">\r\n                                                    <a href="javascript: void(0);" class="page-link">1</a>\r\n                                                </li>\r\n                                                <li class="page-item active">\r\n                                                    <a href="javascript: void(0);" class="page-link">2</a>\r\n                                                </li>\r\n                                                <li class="page-item">\r\n                                                    <a href="javascript: void(0);" class="page-link">3</a>\r\n                                                </li>\r\n                                                <li class="page-item">\r\n                                                    <a href="javascript: void(0);" class="page-link">...</a>\r\n                                                </li>\r\n                                                <li class="page-item">\r\n                                                    <a href="javascript: void(0);" class="page-link">10</a>\r\n                                                </li>\r\n                                                <li class="page-item">\r\n                                                    <a href="javascript: void(0);" class="page-link"><i class="mdi mdi-chevron-right"></i></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                    <tab heading="Archive" class="mt-2">\r\n                        <div class="row justify-content-center">\r\n                            <div class="col-xl-8">\r\n                                <h5>Archive</h5>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2020</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span class="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">03</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Beautiful Day with\r\n                                            Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2019</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span class="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">06</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Coffee with Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Neque porro quisquam\r\n                                            est</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Quis autem vel eum\r\n                                            iure</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Cras mi eu turpis</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class="mt-5">\r\n                                    <div class="d-flex flex-wrap">\r\n                                        <div class="me-2">\r\n                                            <h4>2018</h4>\r\n                                        </div>\r\n                                        <div class="ms-auto">\r\n                                            <span class="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">03</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr class="mt-2">\r\n\r\n                                    <div class="list-group list-group-flush">\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Beautiful Day with\r\n                                            Friends</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Drawing a sketch</a>\r\n\r\n                                        <a routerLink="/blog/detail" class="list-group-item text-muted"><i class="mdi mdi-circle-medium me-1"></i> Project discussion with\r\n                                            team</a>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-xl-3 col-lg-4">\r\n            <div class="card">\r\n                <div class="card-body p-4">\r\n                    <div class="search-box">\r\n                        <p class="text-muted">Search</p>\r\n                        <div class="position-relative">\r\n                            <input type="text" class="form-control rounded bg-light border-light" placeholder="Search...">\r\n                            <i class="mdi mdi-magnify search-icon"></i>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Categories</p>\r\n\r\n                        <ul class="list-unstyled fw-medium">\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    Design</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    Development <span class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">04</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    Business</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    Project</a></li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    Travel<span class="badge badge-soft-success badge-pill ms-1 float-end font-size-12">12</span></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Archive</p>\r\n\r\n                        <ul class="list-unstyled fw-medium">\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    2020 <span class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">03</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    2019 <span class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">06</span></a>\r\n                            </li>\r\n                            <li><a href="javascript: void(0);" class="text-muted py-2 d-block"><i class="mdi mdi-chevron-right me-1"></i>\r\n                                    2018 <span class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">05</span></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted mb-2">Popular Posts</p>\r\n\r\n                        <div class="list-group list-group-flush">\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-7.jpg" alt="" class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Beautiful Day with Friends</h5>\r\n                                        <p class="mb-0 text-truncate">10 Apr, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-4.jpg" alt="" class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Drawing a sketch</h5>\r\n                                        <p class="mb-0 text-truncate">24 Mar, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n\r\n                            <a href="javascript: void(0);" class="list-group-item text-muted py-3 px-2">\r\n                                <div class="d-flex align-items-center">\r\n                                    <div class="flex-shrink-0 me-3">\r\n                                        <img src="assets/images/small/img-6.jpg" alt="" class="avatar-md h-auto d-block rounded">\r\n                                    </div>\r\n                                    <div class="flex-grow-1 overflow-hidden">\r\n                                        <h5 class="font-size-13 text-truncate">Project discussion with team</h5>\r\n                                        <p class="mb-0 text-truncate">11 Mar, 2020</p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr class="my-4">\r\n\r\n                    <div>\r\n                        <p class="text-muted">Tags</p>\r\n\r\n                        <div class="d-flex flex-wrap gap-2 widget-tag">\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Design</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Development</a>\r\n                            </div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Business</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Project</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Travel</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Lifestyle</a></div>\r\n                            <div><a href="javascript: void(0);" class="badge bg-light font-size-12">Photography</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n    </div>\r\n    <!-- end row -->\r\n</div>', styles: ["/* src/app/pages/blog/bloglist/bloglist.component.scss */\n.blog-card .nav {\n  align-items: end;\n  justify-content: flex-end;\n}\n.blog-card h5 {\n  top: 10px;\n}\n.blog-card .card-body {\n  padding: 1.25rem 0 0;\n}\n/*# sourceMappingURL=bloglist.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BloglistComponent, { className: "BloglistComponent", filePath: "src/app/pages/blog/bloglist/bloglist.component.ts", lineNumber: 14 });
})();

// src/app/pages/blog/detail/detail.component.ts
var DetailComponent = class _DetailComponent {
  constructor() {
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: "Blog" }, { label: "Blog Details", active: true }];
  }
  static {
    this.\u0275fac = function DetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailComponent, selectors: [["app-detail"]], decls: 172, vars: 1, consts: [[1, "container-fluid"], ["title", "Blog Details", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "pt-3"], [1, "row", "justify-content-center"], [1, "col-xl-8"], [1, "text-center"], [1, "mb-4"], ["href", "javascript: void(0);", 1, "badge", "bg-light", "font-size-12"], [1, "bx", "bx-purchase-tag-alt", "align-middle", "text-muted", "me-1"], [1, "text-muted", "mb-4"], [1, "mdi", "mdi-calendar", "me-1"], [1, "col-sm-4"], [1, "text-muted", "mb-2"], [1, "font-size-15"], [1, "mt-4", "mt-sm-0"], [1, "my-5"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "img-thumbnail", "mx-auto", "d-block"], [1, "mt-4"], [1, "text-muted", "font-size-14"], [1, "p-4", "border-light", "border", "rounded", "mb-4"], [1, "d-flex"], [1, "me-3"], [1, "bx", "bxs-quote-alt-left", "text-dark", "font-size-24"], [1, "mb-0"], [1, "mb-3"], [1, "col-lg-4", "col-sm-6"], [1, "ps-4"], [1, "py-1"], [1, "mt-5"], [1, "bx", "bx-message-dots", "text-muted", "align-middle", "me-1"], [1, "d-flex", "py-3"], [1, "flex-shrink-0", "me-3"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light", "text-primary"], [1, "bx", "bxs-user"], [1, "flex-grow-1"], [1, "font-size-14", "mb-1"], [1, "text-muted", "float-end"], [1, "text-muted"], ["href", "javascript: void(0);", 1, "text-success"], [1, "mdi", "mdi-reply"], [1, "d-flex", "py-3", "border-top"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "img-fluid", "d-block", "rounded-circle"], [1, "d-flex", "pt-3"], [1, "font-size-16", "mb-3"], [1, "col-md-6"], ["for", "commentname-input"], ["type", "text", "id", "commentname-input", "placeholder", "Enter name", 1, "form-control"], ["for", "commentemail-input"], ["type", "email", "id", "commentemail-input", "placeholder", "Enter email", 1, "form-control"], ["for", "commentmessage-input"], ["id", "commentmessage-input", "placeholder", "Your message...", "rows", "3", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-success", "w-sm"]], template: function DetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-page-title", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div")(10, "div", 9)(11, "div", 10)(12, "a", 11);
        \u0275\u0275element(13, "i", 12);
        \u0275\u0275text(14, " Project ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "h4");
        \u0275\u0275text(16, "Beautiful Day with Friends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 13);
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275text(19, " 10 Apr, 2020 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "hr");
        \u0275\u0275elementStart(21, "div", 9)(22, "div", 2)(23, "div", 15)(24, "div")(25, "p", 16);
        \u0275\u0275text(26, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h5", 17);
        \u0275\u0275text(28, "Project");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "div", 18)(31, "p", 16);
        \u0275\u0275text(32, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h5", 17);
        \u0275\u0275text(34, "10 Apr, 2020");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 15)(36, "div", 18)(37, "p", 16);
        \u0275\u0275text(38, "Post by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h5", 17);
        \u0275\u0275text(40, "Gilbert Smith");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(41, "hr");
        \u0275\u0275elementStart(42, "div", 19);
        \u0275\u0275element(43, "img", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "hr");
        \u0275\u0275elementStart(45, "div", 21)(46, "div", 22)(47, "p");
        \u0275\u0275text(48, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam enim ad minima veniam quis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 10);
        \u0275\u0275text(50, "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "blockquote", 23)(52, "div", 24)(53, "div", 25);
        \u0275\u0275element(54, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div")(56, "p", 27);
        \u0275\u0275text(57, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint quidem rerum facilis est");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 21)(61, "h5", 28);
        \u0275\u0275text(62, "Title: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div")(64, "div", 2)(65, "div", 29)(66, "div")(67, "ul", 30)(68, "li", 31);
        \u0275\u0275text(69, "Donec sodales sagittis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li", 31);
        \u0275\u0275text(71, "Sed consequat leo eget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li", 31);
        \u0275\u0275text(73, "Aliquam lorem ante");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 29)(75, "div")(76, "ul", 30)(77, "li", 31);
        \u0275\u0275text(78, "Aenean ligula eget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li", 31);
        \u0275\u0275text(80, "Cum sociis natoque");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275element(81, "hr");
        \u0275\u0275elementStart(82, "div", 32)(83, "h5", 17);
        \u0275\u0275element(84, "i", 33);
        \u0275\u0275text(85, " Comments :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div")(87, "div", 34)(88, "div", 35)(89, "div", 36)(90, "div", 37);
        \u0275\u0275element(91, "i", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 39)(93, "h5", 40);
        \u0275\u0275text(94, "Delores Williams ");
        \u0275\u0275elementStart(95, "small", 41);
        \u0275\u0275text(96, "1 hr Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "p", 42);
        \u0275\u0275text(98, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div")(100, "a", 43);
        \u0275\u0275element(101, "i", 44);
        \u0275\u0275text(102, " Reply");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(103, "div", 45)(104, "div", 35)(105, "div", 36);
        \u0275\u0275element(106, "img", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 39)(108, "h5", 40);
        \u0275\u0275text(109, "Clarence Smith ");
        \u0275\u0275elementStart(110, "small", 41);
        \u0275\u0275text(111, "2 hrs Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "p", 42);
        \u0275\u0275text(113, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div")(115, "a", 43);
        \u0275\u0275element(116, "i", 44);
        \u0275\u0275text(117, " Reply");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 47)(119, "div", 35)(120, "div", 36)(121, "div", 37);
        \u0275\u0275element(122, "i", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(123, "div", 39)(124, "h5", 40);
        \u0275\u0275text(125, "Silvia Martinez ");
        \u0275\u0275elementStart(126, "small", 41);
        \u0275\u0275text(127, "2 hrs Ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "p", 42);
        \u0275\u0275text(129, "To take a trivial example, which of us ever undertakes laborious physical exercise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div")(131, "a", 43);
        \u0275\u0275element(132, "i", 44);
        \u0275\u0275text(133, " Reply");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(134, "div", 45)(135, "div", 35)(136, "div", 36)(137, "div", 37);
        \u0275\u0275element(138, "i", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 39)(140, "h5", 40);
        \u0275\u0275text(141, "Keith McCoy ");
        \u0275\u0275elementStart(142, "small", 41);
        \u0275\u0275text(143, "12 Aug");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "p", 42);
        \u0275\u0275text(145, "Donec posuere vulputate arcu. phasellus accumsan cursus velit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div")(147, "a", 43);
        \u0275\u0275element(148, "i", 44);
        \u0275\u0275text(149, " Reply");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(150, "div", 21)(151, "h5", 48);
        \u0275\u0275text(152, "Leave a Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "form")(154, "div", 2)(155, "div", 49)(156, "div", 28)(157, "label", 50);
        \u0275\u0275text(158, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(159, "input", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 49)(161, "div", 28)(162, "label", 52);
        \u0275\u0275text(163, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(164, "input", 53);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "div", 28)(166, "label", 54);
        \u0275\u0275text(167, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(168, "textarea", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "div", 56)(170, "button", 57);
        \u0275\u0275text(171, "Submit");
        \u0275\u0275elementEnd()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("breadcrumbItems", ctx.breadCrumbItems);
      }
    }, dependencies: [PagetitleComponent, TabsModule, RouterModule, TooltipModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailComponent, [{
    type: Component,
    args: [{ selector: "app-detail", imports: [PagetitleComponent, TabsModule, RouterModule, TooltipModule], template: '<div class="container-fluid">\r\n    <app-page-title title="Blog Details" [breadcrumbItems]="breadCrumbItems"></app-page-title>\r\n\r\n    <div class="row">\r\n        <div class="col-lg-12">\r\n            <div class="card">\r\n                <div class="card-body">\r\n                    <div class="pt-3">\r\n                        <div class="row justify-content-center">\r\n                            <div class="col-xl-8">\r\n                                <div>\r\n                                    <div class="text-center">\r\n                                        <div class="mb-4">\r\n                                            <a href="javascript: void(0);" class="badge bg-light font-size-12">\r\n                                                <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>\r\n                                                Project\r\n                                            </a>\r\n                                        </div>\r\n                                        <h4>Beautiful Day with Friends</h4>\r\n                                        <p class="text-muted mb-4"><i class="mdi mdi-calendar me-1"></i> 10 Apr, 2020\r\n                                        </p>\r\n                                    </div>\r\n\r\n                                    <hr>\r\n                                    <div class="text-center">\r\n                                        <div class="row">\r\n                                            <div class="col-sm-4">\r\n                                                <div>\r\n                                                    <p class="text-muted mb-2">Categories</p>\r\n                                                    <h5 class="font-size-15">Project</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class="col-sm-4">\r\n                                                <div class="mt-4 mt-sm-0">\r\n                                                    <p class="text-muted mb-2">Date</p>\r\n                                                    <h5 class="font-size-15">10 Apr, 2020</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class="col-sm-4">\r\n                                                <div class="mt-4 mt-sm-0">\r\n                                                    <p class="text-muted mb-2">Post by</p>\r\n                                                    <h5 class="font-size-15">Gilbert Smith</h5>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n\r\n                                    <div class="my-5">\r\n                                        <img src="assets/images/small/img-2.jpg" alt="" class="img-thumbnail mx-auto d-block">\r\n                                    </div>\r\n\r\n                                    <hr>\r\n\r\n                                    <div class="mt-4">\r\n                                        <div class="text-muted font-size-14">\r\n                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\r\n                                                consectetur, adipisci velit, sed quia non numquam eius modi tempora\r\n                                                incidunt ut labore et dolore magnam enim ad minima veniam quis</p>\r\n\r\n                                            <p class="mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam\r\n                                                corporis suscipit laboriosam, nisi ut aliquid ex ea reprehenderit qui in\r\n                                                ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui\r\n                                                dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus\r\n                                                et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\r\n                                                deleniti atque corrupti quos dolores et quas molestias excepturi sint\r\n                                                occaecati cupiditate non provident, similique sunt</p>\r\n\r\n                                            <blockquote class="p-4 border-light border rounded mb-4">\r\n                                                <div class="d-flex">\r\n                                                    <div class="me-3">\r\n                                                        <i class="bx bxs-quote-alt-left text-dark font-size-24"></i>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <p class="mb-0"> At vero eos et accusamus et iusto odio\r\n                                                            dignissimos ducimus qui blanditiis praesentium deleniti\r\n                                                            atque corrupti quos dolores et quas molestias excepturi sint\r\n                                                            quidem rerum facilis est</p>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </blockquote>\r\n\r\n                                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis\r\n                                                voluptatibus maiores alias consequatur aut perferendis doloribus\r\n                                                asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit\r\n                                            </p>\r\n\r\n\r\n                                            <div class="mt-4">\r\n                                                <h5 class="mb-3">Title: </h5>\r\n\r\n                                                <div>\r\n                                                    <div class="row">\r\n                                                        <div class="col-lg-4 col-sm-6">\r\n                                                            <div>\r\n                                                                <ul class="ps-4">\r\n                                                                    <li class="py-1">Donec sodales sagittis</li>\r\n                                                                    <li class="py-1">Sed consequat leo eget</li>\r\n                                                                    <li class="py-1">Aliquam lorem ante</li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class="col-lg-4 col-sm-6">\r\n                                                            <div>\r\n                                                                <ul class="ps-4">\r\n                                                                    <li class="py-1">Aenean ligula eget</li>\r\n                                                                    <li class="py-1">Cum sociis natoque</li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <hr>\r\n\r\n                                        <div class="mt-5">\r\n                                            <h5 class="font-size-15"><i class="bx bx-message-dots text-muted align-middle me-1"></i>\r\n                                                Comments :</h5>\r\n\r\n                                            <div>\r\n                                                <div class="d-flex py-3">\r\n                                                    <div class="flex-shrink-0 me-3">\r\n                                                        <div class="avatar-xs">\r\n                                                            <div class="avatar-title rounded-circle bg-light text-primary">\r\n                                                                <i class="bx bxs-user"></i>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class="flex-grow-1">\r\n                                                        <h5 class="font-size-14 mb-1">Delores Williams <small class="text-muted float-end">1 hr Ago</small></h5>\r\n                                                        <p class="text-muted">If several languages coalesce, the grammar\r\n                                                            of the resulting language is more simple and regular than\r\n                                                            that of the individual</p>\r\n                                                        <div>\r\n                                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class="d-flex py-3 border-top">\r\n                                                    <div class="flex-shrink-0 me-3">\r\n                                                        <div class="avatar-xs">\r\n                                                            <img src="assets/images/users/avatar-2.jpg" alt="" class="img-fluid d-block rounded-circle">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class="flex-grow-1">\r\n                                                        <h5 class="font-size-14 mb-1">Clarence Smith <small class="text-muted float-end">2 hrs Ago</small></h5>\r\n                                                        <p class="text-muted">Neque porro quisquam est, qui dolorem\r\n                                                            ipsum quia dolor sit amet</p>\r\n                                                        <div>\r\n                                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r\n                                                        </div>\r\n\r\n                                                        <div class="d-flex pt-3">\r\n                                                            <div class="flex-shrink-0 me-3">\r\n                                                                <div class="avatar-xs">\r\n                                                                    <div class="avatar-title rounded-circle bg-light text-primary">\r\n                                                                        <i class="bx bxs-user"></i>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class="flex-grow-1">\r\n                                                                <h5 class="font-size-14 mb-1">Silvia Martinez <small class="text-muted float-end">2 hrs Ago</small>\r\n                                                                </h5>\r\n                                                                <p class="text-muted">To take a trivial example, which\r\n                                                                    of us ever undertakes laborious physical exercise\r\n                                                                </p>\r\n                                                                <div>\r\n                                                                    <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class="d-flex py-3 border-top">\r\n                                                    <div class="flex-shrink-0 me-3">\r\n                                                        <div class="avatar-xs">\r\n                                                            <div class="avatar-title rounded-circle bg-light text-primary">\r\n                                                                <i class="bx bxs-user"></i>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class="flex-grow-1">\r\n                                                        <h5 class="font-size-14 mb-1">Keith McCoy <small class="text-muted float-end">12 Aug</small></h5>\r\n                                                        <p class="text-muted">Donec posuere vulputate arcu. phasellus\r\n                                                            accumsan cursus velit</p>\r\n                                                        <div>\r\n                                                            <a href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="mt-4">\r\n                                            <h5 class="font-size-16 mb-3">Leave a Message</h5>\r\n\r\n                                            <form>\r\n                                                <div class="row">\r\n                                                    <div class="col-md-6">\r\n                                                        <div class="mb-3">\r\n                                                            <label for="commentname-input">Name</label>\r\n                                                            <input type="text" class="form-control" id="commentname-input" placeholder="Enter name">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class="col-md-6">\r\n                                                        <div class="mb-3">\r\n                                                            <label for="commentemail-input">Email</label>\r\n                                                            <input type="email" class="form-control" id="commentemail-input" placeholder="Enter email">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class="mb-3">\r\n                                                    <label for="commentmessage-input">Message</label>\r\n                                                    <textarea class="form-control" id="commentmessage-input" placeholder="Your message..." rows="3"></textarea>\r\n                                                </div>\r\n\r\n                                                <div class="text-end">\r\n                                                    <button type="submit" class="btn btn-success w-sm">Submit</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- end card body -->\r\n            </div>\r\n            <!-- end card -->\r\n        </div>\r\n        <!-- end col -->\r\n    </div>\r\n    <!-- end row -->\r\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailComponent, { className: "DetailComponent", filePath: "src/app/pages/blog/detail/detail.component.ts", lineNumber: 14 });
})();

// src/app/pages/blog/blog-routing.module.ts
var routes = [
  {
    path: "list",
    component: BloglistComponent
  },
  {
    path: "grid",
    component: BloggridComponent
  },
  {
    path: "detail",
    component: DetailComponent
  }
];
var BlogRoutingModule = class _BlogRoutingModule {
  static {
    this.\u0275fac = function BlogRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BlogRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/pages/blog/blog.module.ts
var BlogModule = class _BlogModule {
  static {
    this.\u0275fac = function BlogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BlogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [BlogRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        BlogRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  BlogModule
};
//# sourceMappingURL=chunk-NWYIPIEM.js.map
