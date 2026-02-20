// src/app/core/data/file-manager.ts
var recentFiles = [
  {
    id: 1,
    name: "index.html",
    date: "12-10-2020, 09:45",
    size: "09 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-file-document"
  },
  {
    id: 2,
    name: "Project-A.zip",
    date: "11-10-2020, 17:05",
    size: "115 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-folder-zip   text-warning"
  },
  {
    id: 3,
    name: "Img-1.jpeg",
    date: "11-10-2020, 13:26",
    size: "86 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-image text-muted"
  },
  {
    id: 4,
    name: "update list.txt",
    date: "10-10-2020, 11:32",
    size: "08 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-text-box text-muted"
  },
  {
    id: 5,
    name: "Project B",
    date: "10-10-2020, 10:51",
    size: "72 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-folder text-warning"
  },
  {
    id: 6,
    name: "Changes list.txt",
    date: "09-10-2020, 17:05",
    size: "07 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-text-box text-muted"
  },
  {
    id: 7,
    name: "Img-2.png",
    date: "09-10-2020, 15:12",
    size: "31 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-image text-success"
  },
  {
    id: 8,
    name: "Project C",
    date: "09-10-2020, 10:11",
    size: "20 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "mdi mdi-folder text-warning"
  },
  {
    id: 9,
    name: "starter-page.html",
    date: "08-10-2020, 03:22",
    size: "11 KB",
    actions: ["Open", "Edit", "Rename", "Remove"],
    icon: "bx bxs-file"
  }
];

// src/app/core/data/order.ts
var ordersData = [
  {
    id: "#SK2540",
    name: "Neal Matthews",
    date: "2019-10-07",
    total: "$400",
    status: "Paid",
    payment_icon: "fab fa-cc-mastercard",
    payment: "Mastercard",
    index: 1
  },
  {
    id: "#SK2541",
    name: "Jamal Burnett",
    date: "2019-10-07",
    total: "$380",
    status: "Chargeback",
    payment_icon: "fab fa-cc-visa",
    payment: "Visa",
    index: 2
  },
  {
    id: "#SK2542",
    name: "Juan Mitchell",
    date: "2019-10-06",
    total: "$384",
    status: "Paid",
    payment_icon: "fab fa-cc-paypal",
    payment: "Paypal",
    index: 3
  },
  {
    id: "#SK2543",
    name: "Barry Dick",
    date: "2019-10-05",
    total: "$412",
    status: "Paid",
    payment_icon: "fab fa-cc-mastercard",
    payment: "Mastercard",
    index: 4
  },
  {
    id: "#SK2544",
    name: "Ronald Taylor",
    date: "2019-10-04",
    total: "$404",
    status: "Refund",
    payment_icon: "fab fa-cc-visa",
    payment: "Visa",
    index: 5
  },
  {
    id: "#SK2545",
    name: "Jacob Hunter",
    date: "2019-10-04",
    total: "$392",
    status: "Paid",
    payment_icon: "fab fa-cc-paypal",
    payment: "Paypal",
    index: 6
  },
  {
    id: "#SK2546",
    name: "William Cruz",
    date: "2019-10-03",
    total: "$374",
    status: "Paid",
    payment_icon: "fas fa-money-bill-alt",
    payment: "COD",
    index: 7
  },
  {
    id: "#SK2547",
    name: "Dustin Moser",
    date: "2019-10-02",
    total: "$350",
    status: "Paid",
    payment_icon: "fab fa-cc-mastercard",
    payment: "Mastercard",
    index: 8
  },
  {
    id: "#SK2548",
    name: "Clark Benson",
    date: "2019-10-01",
    total: "$345",
    status: "Refund",
    payment_icon: "fab fa-cc-visa",
    payment: "Visa",
    index: 9
  }
];

// src/app/core/data/customer.ts
var customersData = [
  {
    id: 1,
    username: "Stephen Rash",
    phone: "325-250-1106",
    email: "StephenRash@teleworm.us",
    address: "2470 Grove Street Bethpage, NY 11714",
    rating: "4.2",
    balance: "$5,412",
    date: "07 Oct, 2019"
  },
  {
    id: 2,
    username: "Juan Mays",
    phone: "443-523-4726",
    email: "JuanMays@armyspy.com",
    address: "3755 Harron Drive Salisbury, MD 21875",
    rating: "4.0",
    balance: "$5,632",
    date: "06 Oct, 2019"
  },
  {
    id: 3,
    username: "Scott Henry",
    phone: "704-629-9535",
    email: "ScottHenry@jourrapide.com",
    address: "3632 Snyder Avenue Bessemer City, NC 28016",
    rating: "4.4",
    balance: "$7,523",
    date: "06 Oct, 2019"
  },
  {
    id: 4,
    username: "Cody Menendez",
    phone: "701-832-5838",
    email: "CodyMenendez@armyspy.com",
    address: "4401 Findley Avenue Minot, ND 58701",
    rating: "4.1",
    balance: "$6,325",
    date: "05 Oct, 2019"
  },
  {
    id: 5,
    username: "Jason Merino",
    phone: "706-219-4095",
    email: "JasonMerino@dayrep.com",
    address: "3159 Holly Street Cleveland, GA 30528",
    rating: "3.8",
    balance: "$4,523",
    date: "04 Oct, 2019"
  },
  {
    id: 6,
    username: "Kyle Aquino",
    phone: "415-232-5443",
    email: "KyleAquino@teleworm.us",
    address: "4861 Delaware Avenue San Francisco, CA 94143",
    rating: "4.0",
    balance: "$5,412",
    date: "03 Oct, 2019"
  },
  {
    id: 7,
    username: "David Gaul",
    phone: "314-483-4679",
    email: "DavidGaul@teleworm.us",
    address: "1207 Cottrill Lane Stlouis, MO 63101",
    rating: "4.2",
    balance: "$6,180",
    date: "02 Oct, 2019"
  },
  {
    id: 8,
    username: "John McCray",
    phone: "253-661-7551",
    email: "JohnMcCray@armyspy.com",
    address: "3309 Horizon Circle Tacoma, WA 98423",
    rating: "4.1",
    balance: "$5,2870",
    date: "02 Oct, 2019"
  },
  {
    id: 9,
    username: "Kyle Aquino",
    phone: "415-232-5443",
    email: "KyleAquino@teleworm.us",
    address: "4861 Delaware Avenue San Francisco, CA 94143",
    rating: "4.0",
    balance: "$5,412",
    date: "03 Oct, 2019"
  },
  {
    id: 10,
    username: "David Gaul",
    phone: "314-483-4679",
    email: "DavidGaul@teleworm.us",
    address: "1207 Cottrill Lane Stlouis, MO 63101",
    rating: "4.2",
    balance: "$6,180",
    date: "02 Oct, 2019"
  },
  {
    id: 11,
    username: "John McCray",
    phone: "253-661-7551",
    email: "JohnMcCray@armyspy.com",
    address: "3309 Horizon Circle Tacoma, WA 98423",
    rating: "4.1",
    balance: "$5,2870",
    date: "02 Oct, 2019"
  },
  {
    id: 12,
    username: "Scott Henry",
    phone: "704-629-9535",
    email: "ScottHenry@jourrapide.com",
    address: "3632 Snyder Avenue Bessemer City, NC 28016",
    rating: "4.4",
    balance: "$7,523",
    date: "06 Oct, 2019"
  }
];

// src/app/core/data/cart.ts
var cartData = [
  {
    id: 1,
    image: "assets/images/product/img-1.png",
    name: "Half sleeve T-shirt",
    color: "Maroon",
    price: 450,
    qty: 2,
    total: "900"
  },
  {
    id: 2,
    image: "assets/images/product/img-2.png",
    name: "Light blue T-shirt",
    color: "Light blue",
    price: 225,
    qty: 1,
    total: "225"
  },
  {
    id: 3,
    image: "assets/images/product/img-3.png",
    name: "Black Color T-shirt",
    color: "Black",
    price: 152,
    qty: 1,
    total: "304"
  },
  {
    id: 4,
    image: "assets/images/product/img-4.png",
    name: "Hoodie (Blue)",
    color: "Blue",
    price: 145,
    qty: 2,
    total: "290"
  },
  {
    id: 5,
    image: "assets/images/product/img-5.png",
    name: "Half sleeve T-Shirt",
    color: "Light orange",
    price: 138,
    qty: 1,
    total: "138"
  },
  {
    id: 6,
    image: "assets/images/product/img-6.png",
    name: "Green color T-shirt",
    color: "Green",
    price: 152,
    qty: 2,
    total: "304"
  }
];

// src/app/core/data/projectdata.ts
var projectData = [
  {
    id: 1,
    image: "assets/images/companies/img-1.png",
    text: "New admin Design",
    subtext: "It will be as simple as Occidental",
    users: ["assets/images/users/avatar-2.jpg", "assets/images/users/avatar-1.jpg"],
    status: "Completed",
    date: "15 Oct, 19",
    comment: 214
  },
  {
    id: 2,
    image: "assets/images/companies/img-2.png",
    text: "Brand logo design",
    subtext: "To achieve it would be necessary",
    users: ["assets/images/users/avatar-3.jpg"],
    status: "Pending",
    date: "22 Oct, 19",
    comment: 183
  },
  {
    id: 3,
    image: "assets/images/companies/img-3.png",
    text: "New Landing Design",
    subtext: "For science, music, sport, etc",
    users: ["assets/images/users/avatar-5.jpg", "assets/images/users/avatar-4.jpg"],
    status: "Delay",
    date: "13 Oct, 19",
    comment: 175
  },
  {
    id: 4,
    image: "assets/images/companies/img-4.png",
    text: "Redesign - Landing page",
    subtext: "If several languages coalesce",
    users: ["assets/images/users/avatar-6.jpg", "assets/images/users/avatar-4.jpg", "assets/images/users/avatar-3.jpg"],
    status: "Completed",
    date: "14 Oct, 19",
    comment: 202
  },
  {
    id: 5,
    image: "assets/images/companies/img-5.png",
    text: "Skote Dashboard UI",
    subtext: "Separate existence is a myth",
    users: ["assets/images/users/avatar-7.jpg", "assets/images/users/avatar-8.jpg"],
    status: "Completed",
    date: "13 Oct, 19",
    comment: 194
  },
  {
    id: 6,
    image: "assets/images/companies/img-6.png",
    text: "Blog Template UI",
    subtext: "For science, music, sport, etc",
    users: ["assets/images/users/avatar-6.jpg"],
    status: "Pending",
    date: "24 Oct, 19",
    comment: 122
  },
  {
    id: 7,
    image: "assets/images/companies/img-3.png",
    text: "Multipurpose Landing",
    subtext: "It will be as simple as Occidental",
    users: ["assets/images/users/avatar-3.jpg"],
    status: "Delay",
    date: "15 Oct, 19",
    comment: 214
  },
  {
    id: 8,
    image: "assets/images/companies/img-4.png",
    text: "App Landing UI",
    subtext: "For science, music, sport, etc",
    users: ["assets/images/users/avatar-4.jpg"],
    status: "Completed",
    date: "11 Oct, 19",
    comment: 185
  },
  {
    id: 9,
    image: "assets/images/companies/img-2.png",
    text: "New admin Design",
    subtext: "Their most common words.",
    users: ["assets/images/users/avatar-5.jpg"],
    status: "Completed",
    date: "12 Oct, 19",
    comment: 106
  },
  {
    id: 10,
    image: "assets/images/companies/img-6.png",
    text: "Blog Template UI",
    subtext: "For science, music, sport, etc",
    users: ["assets/images/users/avatar-6.jpg"],
    status: "Pending",
    date: "24 Oct, 19",
    comment: 122
  },
  {
    id: 11,
    image: "assets/images/companies/img-3.png",
    text: "Multipurpose Landing",
    subtext: "It will be as simple as Occidental",
    users: ["assets/images/users/avatar-3.jpg"],
    status: "Delay",
    date: "15 Oct, 19",
    comment: 214
  },
  {
    id: 12,
    image: "assets/images/companies/img-4.png",
    text: "Redesign - Landing page",
    subtext: "If several languages coalesce",
    users: ["assets/images/users/avatar-6.jpg", "assets/images/users/avatar-4.jpg", "assets/images/users/avatar-3.jpg"],
    status: "Completed",
    date: "14 Oct, 19",
    comment: 202
  }
];

// src/app/core/data/usergrid.ts
var userGridData = [
  {
    id: 1,
    name: "David McHenry",
    designation: "UI/UX Designer",
    projects: ["Photoshop", "illustrator"],
    email: "david@skote.com"
  },
  {
    id: 2,
    image: "assets/images/users/avatar-2.jpg",
    name: "Frank Kirk",
    designation: "Frontend Developer",
    projects: ["Html", "Css", "2 + more"],
    email: "frank@skote.com"
  },
  {
    id: 3,
    image: "assets/images/users/avatar-3.jpg",
    name: "Rafael Morales",
    designation: "Backend Developer",
    projects: ["Php", "Java", "Python"],
    email: "Rafael@skote.com"
  },
  {
    id: 4,
    name: "Mark Ellison",
    designation: "Full Stack Developer",
    projects: ["Ruby", "Php", "2 + more"],
    email: "mark@skote.com"
  },
  {
    id: 5,
    image: "assets/images/users/avatar-4.jpg",
    name: "Minnie Walter",
    designation: "Frontend Developer",
    projects: ["Html", "Css", "2 + more"],
    email: "minnie@skote.com"
  },
  {
    id: 6,
    image: "assets/images/users/avatar-5.jpg",
    name: "Shirley Smith",
    designation: "UI/UX Designer",
    projects: ["Photoshop", "illustrator"],
    email: "shirley@skote.com"
  },
  {
    id: 7,
    name: "John Santiago",
    designation: "Full Stack Developer",
    projects: ["Ruby", "Php", "2 + more"],
    email: "john@skote.com"
  },
  {
    id: 8,
    image: "assets/images/users/avatar-5.jpg",
    name: "Colin Melton",
    designation: "Backend Developer",
    projects: ["Php", "Java", "Python"],
    email: "colin@skote.com"
  }
];

// src/app/core/data/userlist.ts
var userList = [
  {
    id: 1,
    name: "David McHenry",
    position: "UI/UX Designer",
    email: "david@skote.com",
    tags: ["Photoshop", "illustrator"],
    project: "152",
    isSelected: false
  },
  {
    id: 2,
    profile: "assets/images/users/avatar-2.jpg",
    name: "Frank Kirk",
    position: "Frontend Developer",
    email: "frank@skote.com",
    tags: ["Html", "Css", "2 + more"],
    project: "132",
    isSelected: false
  },
  {
    id: 3,
    profile: "assets/images/users/avatar-3.jpg",
    name: "Rafael Morales",
    position: "Backend Developer",
    email: "Rafael@skote.com",
    tags: ["Php", "Java", "Python"],
    project: "112",
    isSelected: false
  },
  {
    id: 4,
    name: "Mark Ellison",
    position: "Full Stack Developer",
    email: "mark@skote.com",
    tags: ["Ruby", "Php", "2 + more"],
    project: "121",
    isSelected: false
  },
  {
    id: 5,
    profile: "assets/images/users/avatar-4.jpg",
    name: "Minnie Walter",
    position: "Frontend Developer",
    email: "minnie@skote.com",
    tags: ["Html", "Css", "2 + more"],
    project: "145",
    isSelected: false
  },
  {
    id: 6,
    profile: "assets/images/users/avatar-5.jpg",
    name: "Shirley Smith",
    position: "UI/UX Designer",
    email: "shirley@skote.com",
    tags: ["Photoshop", "illustrator"],
    project: "136",
    isSelected: false
  },
  {
    id: 7,
    name: "John Santiago",
    position: "Full Stack Developer",
    email: "john@skote.com",
    tags: ["Ruby", "Php", "2 + more"],
    project: "125",
    isSelected: false
  },
  {
    id: 8,
    profile: "assets/images/users/avatar-5.jpg",
    name: "Colin Melton",
    position: "Backend Developer",
    email: "colin@skote.com",
    tags: ["Php", "Java", "Python"],
    project: "136",
    isSelected: false
  },
  {
    id: 9,
    name: "Mark Ellison",
    position: "Full Stack Developer",
    email: "mark@skote.com",
    tags: ["Ruby", "Php", "2 + more"],
    project: "121",
    isSelected: false
  },
  {
    id: 10,
    profile: "assets/images/users/avatar-4.jpg",
    name: "Minnie Walter",
    position: "Frontend Developer",
    email: "minnie@skote.com",
    tags: ["Html", "Css", "2 + more"],
    project: "145",
    isSelected: false
  },
  {
    id: 11,
    profile: "assets/images/users/avatar-5.jpg",
    name: "Shirley Smith",
    position: "UI/UX Designer",
    email: "shirley@skote.com",
    tags: ["Photoshop", "illustrator"],
    project: "136",
    isSelected: false
  },
  {
    id: 12,
    name: "John Santiago",
    position: "Full Stack Developer",
    email: "john@skote.com",
    tags: ["Ruby", "Php", "2 + more"],
    project: "125",
    isSelected: false
  },
  {
    id: 13,
    profile: "assets/images/users/avatar-5.jpg",
    name: "Colin Melton",
    position: "Backend Developer",
    email: "colin@skote.com",
    tags: ["Php", "Java", "Python"],
    project: "136",
    isSelected: false
  }
];

// src/app/core/data/joblist.ts
var JobListdata = [
  {
    id: 1,
    title: "Magento Developer",
    name: "Themesbrand",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Full Time",
    type_color: "success",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  },
  {
    id: 2,
    title: "Product Designer",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "1-2 Years",
    position: 3,
    type: "Part Time",
    type_color: "danger",
    posted_date: "15 June 2021",
    last_date: "28 June 2021",
    status: "New",
    status_color: "info"
  },
  {
    id: 3,
    title: "Marketing Director",
    name: "Creative Agency",
    location: "Phoenix",
    experience: "-",
    position: 5,
    type: "Full Time",
    type_color: "success",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Close",
    status_color: "danger"
  },
  {
    id: 4,
    title: "HTML Developer",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-4 Years",
    position: 8,
    type: "Full Time",
    type_color: "success",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  },
  {
    id: 5,
    title: "Product Sales Specialist",
    name: "Skote Technology pvt.Ltd",
    location: "Louisiana",
    experience: "5+ Years",
    position: 1,
    type: "Part Time",
    type_color: "danger",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "New",
    status_color: "info"
  },
  {
    id: 6,
    title: "Magento Developer",
    name: "New Technology pvt.ltd",
    location: "Oakridge Lane Richardson",
    experience: "0-2 Years",
    position: 2,
    type: "Freelance",
    type_color: "info",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "New",
    status_color: "info"
  },
  {
    id: 7,
    title: "Business Associate",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Full Time",
    type_color: "success",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  },
  {
    id: 8,
    title: "Magento Developer",
    name: "Adobe Agency",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Full Time",
    type_color: "success",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Close",
    status_color: "danger"
  },
  {
    id: 9,
    title: "HTML Developer",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Part Time",
    type_color: "danger",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "New",
    status_color: "info"
  },
  {
    id: 10,
    title: "Marketing Director",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Internship",
    type_color: "warning",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  },
  {
    id: 11,
    title: "Marketing Director",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Internship",
    type_color: "warning",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  },
  {
    id: 12,
    title: "Marketing Director",
    name: "Web Technology pvt.ltd",
    location: "California",
    experience: "0-2 Years",
    position: 2,
    type: "Internship",
    type_color: "warning",
    posted_date: "02 June 2021",
    last_date: "25 June 2021",
    status: "Active",
    status_color: "success"
  }
];

// src/app/core/data/jobgrid.ts
var JobGriddata = [
  {
    id: 1,
    image: "assets/images/companies/adobe.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 2,
    image: "assets/images/companies/adobe-photoshop.svg",
    title: "Product Designer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 3,
    image: "assets/images/companies/airbnb.svg",
    title: "Marketing Director",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 4,
    image: "assets/images/companies/amazon.svg",
    title: "Project Manager",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 5,
    image: "assets/images/companies/flutter.svg",
    title: "HTML Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 6,
    image: "assets/images/companies/mailchimp.svg",
    title: "Business Associate",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 7,
    image: "assets/images/companies/line.svg",
    title: "Product Sales Specialist",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 8,
    image: "assets/images/companies/spotify.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 9,
    image: "assets/images/companies/wordpress.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 10,
    image: "assets/images/companies/upwork.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 11,
    image: "assets/images/companies/sass.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  },
  {
    id: 12,
    image: "assets/images/companies/reddit.svg",
    title: "Magento Developer",
    year: "0-2",
    company: "Skote Technology Pvt.Ltd",
    location: "California",
    price: "$250 - $800"
  }
];

// src/app/core/data/candidate.ts
var CandidateList = [
  {
    id: "1",
    type: "Full Time",
    profile: "assets/images/users/avatar-1.jpg",
    name: "Steven Franklin",
    position: "UI/UX Designer",
    location: "Louisiana",
    price: 38,
    tags: ["Bootstrap", "HTML", "CSS"]
  },
  {
    id: "2",
    type: "Freelance",
    profile: "assets/images/users/avatar-2.jpg",
    name: "Dolores Minter",
    position: "Assistant / Shope Keeper",
    location: "Hong-Kong",
    price: 25,
    tags: ["Shope", "Assistant"]
  },
  {
    id: "3",
    type: "Part Time",
    profile: "assets/images/users/avatar-3.jpg",
    name: "Charles Brown",
    position: "Web Designer",
    location: "Finlande",
    price: 24,
    tags: ["Bootstrap", "HTML", "SASS"]
  },
  {
    id: "4",
    type: "Internship",
    profile: "assets/images/users/avatar-4.jpg",
    name: "Bonnie Harney",
    position: "Web Developer",
    location: "France",
    price: 47,
    tags: ["MYSQL", "PHP", "Laravel"]
  },
  {
    id: "5",
    type: "Internship",
    profile: "assets/images/users/avatar-5.jpg",
    name: "Stephen Hadley",
    position: "Graphic Designer",
    location: "Danemark",
    price: 83,
    tags: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    id: "6",
    type: "Internship",
    profile: "assets/images/users/avatar-6.jpg",
    name: "Henry Wells",
    position: "Executive, HR Operations",
    location: "Danemark",
    price: 65,
    tags: ["HR", "Executive", "Professional"]
  },
  {
    id: "7",
    type: "Full Time",
    profile: "assets/images/users/avatar-7.jpg",
    name: "Adam Miller",
    position: "Education Training",
    location: "Colombie",
    price: 40,
    tags: ["Teaching", "React", "Training"]
  },
  {
    id: "8",
    type: "Freelance",
    profile: "assets/images/users/avatar-8.jpg",
    name: "Keith Gonzales",
    position: "Product Manager",
    location: "Brazil",
    price: 50,
    tags: ["Manager", "Business", "Product"]
  }
];

// src/app/core/data/invoices.ts
var listData = [
  {
    name: "Marion Burton",
    id: "#14251",
    title: "Skote Dashboard UI",
    amount: "$1455",
    date: "10 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-2.jpg",
    name: "Francis Witte",
    id: "#14252",
    title: "Brand logo design",
    amount: "$1024",
    date: "11 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-7.jpg",
    name: "Joseph Flint",
    id: "#14253",
    title: "Landing page Design",
    amount: "$1189",
    date: "12 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-8.jpg",
    name: "Larry Nielsen",
    id: "#14254",
    title: "Redesign - Landing page",
    amount: "$1254",
    date: "12 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-5.jpg",
    name: "Mark Evans",
    id: "#14255",
    title: "Blog Template Design",
    amount: "$1024",
    date: "11 Oct, 19"
  },
  {
    name: "Timothy Lee",
    id: "#14256",
    title: "Landing page Design",
    amount: "$1189",
    date: "13 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-1.jpg",
    name: "Stanley Bland",
    id: "#14257",
    title: "Landing page UI",
    amount: "$1148",
    date: "14 Oct, 19"
  },
  {
    name: "Tommy Wilson",
    id: "#14258",
    title: "Redesign - Dashboard",
    amount: "$1259",
    date: "15 Oct, 19"
  },
  {
    image: "assets/images/users/avatar-4.jpg",
    name: "Louis Brandon",
    id: "#14257",
    title: "Email Template UI",
    amount: "$1355",
    date: "15 Oct, 19"
  }
];

// src/app/core/data/chat.ts
var chatData = [
  {
    image: "assets/images/users/avatar-2.jpg",
    name: "Steven Franklin",
    message: "Hey! there I'm available",
    time: "05 min",
    color: "secondary"
  },
  {
    image: "assets/images/users/avatar-3.jpg",
    name: "Adam Miller",
    message: "I've finished it! See you so",
    time: "12 min",
    color: "success"
  },
  {
    name: "Keith Gonzales",
    message: "This theme is awesome!",
    time: "24 min",
    color: "success"
  },
  {
    image: "assets/images/users/avatar-4.jpg",
    name: "Jose Vickery",
    message: "Nice to meet you",
    time: "1 hr",
    color: "warning"
  },
  {
    name: "Mitchel Givens",
    message: "Hey! there I'm available",
    time: "3 hrs",
    color: "secondary"
  },
  {
    image: "assets/images/users/avatar-4.jpg",
    name: "Stephen Hadley",
    message: "I've finished it! See you so",
    time: "5 hrs",
    color: "success"
  },
  {
    image: "assets/images/users/avatar-2.jpg",
    name: "Keith Gonzales",
    message: "This theme is awesome!",
    time: "24 min",
    color: "success"
  }
];
var chatMessagesData = [
  {
    name: "Steven Franklin",
    message: "Hello!",
    time: "10:00"
  },
  {
    align: "right",
    name: "Henry Wells",
    message: "Hi, How are you? What about our next meeting?",
    time: "10:02"
  },
  {
    name: "Steven Franklin",
    message: "Yeah everything is fine",
    time: "10:06"
  },
  {
    name: "Steven Franklin",
    message: "& Next meeting tomorrow 10.00AM",
    time: "10:06"
  },
  {
    align: "right",
    name: "Henry Wells",
    message: "Wow that's great",
    time: "10:07"
  }
];

// src/app/core/data/jobapply.ts
var JobApplydata = [
  {
    id: 1,
    title: "Magento Developer",
    company: "Creative Agency",
    type: "Full Time",
    date: "02 June 2021",
    status: "Active"
  },
  {
    id: 2,
    title: "Apple School & College",
    company: "Themesbrand",
    type: "Part Time",
    date: "15 June 2021",
    status: "New"
  },
  {
    id: 3,
    title: "Marketing Director",
    company: "Web Technology pvt.Ltd",
    type: "Full Time",
    date: "02 June 2021",
    status: "Close"
  },
  {
    id: 4,
    title: "HTML Developer",
    company: "Skote Technology pvt.Ltd",
    type: "Full Time",
    date: "02 June 2021",
    status: "Active"
  },
  {
    id: 5,
    title: "Product Sales Specialist",
    company: "New Technology pvt.Ltd",
    type: "Part Time",
    date: "25 June 2021",
    status: "New"
  },
  {
    id: 6,
    title: "Magento Developer",
    company: "Themesbrand",
    type: "Freelance",
    date: "25 June 2021",
    status: "Close"
  },
  {
    id: 7,
    title: "Magento Developer",
    company: "Web Technology pvt.Ltd",
    type: "Part Time",
    date: "25 June 2021",
    status: "Active"
  },
  {
    id: 8,
    title: "Magento Developer",
    company: "Web Technology pvt.Ltd",
    type: "Full Time",
    date: "02 June 2021",
    status: "Close"
  },
  {
    id: 9,
    title: "Magento Developer",
    company: "Adobe Agency",
    type: "Freelance",
    date: "02 June 2021",
    status: "New"
  },
  {
    id: 10,
    title: "Magento Developer",
    company: "Web Technology pvt.Ltd",
    type: "Internship",
    date: "02 June 2021",
    status: "Active"
  }
];

// src/app/core/data/kanban.ts
var tasks = [
  {
    id: 1,
    title: "Topnav layout design",
    date: "14 Oct, 2019",
    task: "Waiting",
    user: ["assets/images/users/avatar-4.jpg", "assets/images/users/avatar-5.jpg"],
    budget: 145,
    status: "upcoming"
  },
  {
    id: 2,
    title: "Create a New Landing UI",
    date: "15 Oct, 2019",
    task: "Approved",
    user: ["assets/images/users/avatar-6.jpg", "assets/images/users/avatar-7.jpg"],
    budget: 112,
    status: "upcoming"
  },
  {
    id: 3,
    title: "Create a Skote Logo",
    date: "15 Oct, 2019",
    task: "Waiting",
    user: ["assets/images/users/avatar-5.jpg"],
    budget: 86,
    status: "upcoming"
  },
  {
    id: 4,
    title: "Brand logo design",
    date: "12 Oct, 2019",
    task: "Complete",
    user: ["assets/images/users/avatar-6.jpg"],
    budget: 132,
    status: "inprogress"
  },
  {
    id: 5,
    title: "Create a Blog Template UI",
    date: "13 Oct, 2019",
    task: "Pending",
    user: ["assets/images/users/avatar-8.jpg", "assets/images/users/avatar-1.jpg"],
    budget: 103,
    status: "inprogress"
  },
  {
    id: 6,
    title: "Skote Dashboard UI",
    date: "13 Oct, 2019",
    task: "Complete",
    user: ["assets/images/users/avatar-2.jpg"],
    budget: 94,
    status: "inprogress"
  },
  {
    id: 7,
    title: "Redesign - Landing page",
    date: "10 Oct, 2019",
    task: "Complete",
    user: ["assets/images/users/avatar-4.jpg"],
    budget: 145,
    groupId: 3,
    status: "completed"
  },
  {
    id: 8,
    title: "Multipurpose Landing",
    date: "09 Oct, 2019",
    task: "Complete",
    user: ["assets/images/users/avatar-6.jpg", "assets/images/users/avatar-7.jpg"],
    budget: 92,
    groupId: 3,
    status: "completed"
  },
  {
    id: 9,
    title: "Skote landing Psd",
    date: "15 Oct, 2019",
    task: "Waiting",
    user: ["assets/images/users/avatar-5.jpg"],
    budget: 86,
    groupId: 3,
    status: "completed"
  }
];
var memberList = [
  {
    id: 1,
    profile: "assets/images/users/avatar-1.jpg",
    name: "Albert Rodarte",
    checked: false
  },
  {
    id: 2,
    profile: "assets/images/users/avatar-2.jpg",
    name: "Hannah Glover",
    checked: false
  },
  {
    id: 3,
    profile: "assets/images/users/avatar-3.jpg",
    name: "Adrian Rodarte",
    checked: false
  },
  {
    id: 4,
    profile: "assets/images/users/avatar-4.jpg",
    name: "Frank Hamilton",
    checked: false
  },
  {
    id: 5,
    profile: "assets/images/users/avatar-5.jpg",
    name: "Justin Howard",
    checked: false
  },
  {
    id: 6,
    profile: "assets/images/users/avatar-6.jpg",
    name: "Michael Lawrence",
    checked: false
  },
  {
    id: 7,
    profile: "assets/images/users/avatar-7.jpg",
    name: "Oliver Sharp",
    checked: false
  },
  {
    id: 8,
    profile: "assets/images/users/avatar-8.jpg",
    name: "Richard Simpson",
    checked: false
  }
];

// src/app/core/data/cryptoOrder.ts
var orders = [
  {
    id: "#SK3215",
    status: "Completed",
    date: "03 Mar, 2020",
    type: "Buy",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3216",
    status: "Completed",
    date: "04 Mar, 2020",
    type: "Buy",
    coin: "Litecoin",
    value: "0.00214 LTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3217",
    status: "Pending",
    date: "05 Mar, 2020",
    type: "Sell",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3218",
    status: "Completed",
    date: "03 Mar, 2020",
    type: "Sell",
    coin: "Ethereum",
    value: "0.00413 ETH",
    usd: "$ 2123.01"
  },
  {
    id: "#SK3219",
    status: "Completed",
    date: "08 Mar, 2020",
    type: "Buy",
    coin: "Litecoin",
    value: "1.00124 LTC",
    usd: "$ 1802.62"
  },
  {
    id: "#SK3220",
    status: "Pending",
    date: "06 Mar, 2020",
    type: "Sell",
    coin: "Ethereum",
    value: "0.00413 ETH",
    usd: "$ 2123.01"
  },
  {
    id: "#SK3221",
    status: "Failed",
    date: "05 Mar, 2020",
    type: "Buy",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3222",
    status: "Completed",
    date: "03 Mar, 2020",
    type: "Buy",
    coin: "Ethereum",
    value: "0.00413 ETH",
    usd: "$ 2123.01"
  },
  {
    id: "#SK3223",
    status: "Pending",
    date: "10 Mar, 2020",
    type: "Buy",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3224",
    status: "Pending",
    date: "18 Mar, 2020",
    type: "Buy",
    coin: "Litecoin",
    value: "0.00224 LTC",
    usd: "$ 1773.01"
  },
  {
    id: "#SK3225",
    status: "Completed",
    date: "03 Mar, 2020",
    type: "Buy",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9423.73"
  },
  {
    id: "#SK3226",
    status: "Pending",
    date: "15 Mar, 2020",
    type: "Sell",
    coin: "Ethereum",
    value: "0.00413 ETH",
    usd: "$ 2123.01"
  },
  {
    id: "#SK3227",
    status: "Completed",
    date: "03 Mar, 2020",
    type: "Sell",
    coin: "Bitcoin",
    value: "1.00952 BTC",
    usd: "$ 9067.62"
  },
  {
    id: "#SK3228",
    status: "Failed",
    date: "01 Mar, 2020",
    type: "Sell",
    coin: "Litecoin",
    value: "1.00217 LTC",
    usd: "$ 9067.62"
  }
];

// src/app/core/data/email.ts
var emailData = [
  {
    id: 1,
    title: "Waters, Jacobs and Ortiz",
    // tslint:disable-next-line: max-line-length
    subject: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "09-Dec",
    category: "all"
  },
  {
    id: 2,
    title: "Ernser, Bernier and Schaden",
    // tslint:disable-next-line: max-line-length
    subject: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "29-Apr",
    category: "starred",
    isIcon: true
  },
  {
    id: 3,
    title: "Davis, Pouros and Welch",
    // tslint:disable-next-line: max-line-length
    subject: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    date: "12-Jun",
    category: "starred",
    isIcon: true
  },
  {
    id: 4,
    title: "O'Keefe Group'",
    // tslint:disable-next-line: max-line-length
    subject: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    date: "01-Mar",
    category: "all"
  },
  {
    id: 5,
    title: "Batz, Abbott and Jakubowski",
    // tslint:disable-next-line: max-line-length
    subject: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    date: "12-Oct",
    category: "all"
  },
  {
    id: 6,
    unread: true,
    title: "Mertz and Sons",
    subject: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    date: "09-May",
    category: "important"
  },
  {
    id: 7,
    title: "Thompson Group",
    // tslint:disable-next-line: max-line-length
    subject: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    date: "26-Dec",
    category: "all"
  },
  {
    id: 8,
    title: "Jerde, Okuneva and Klocko",
    // tslint:disable-next-line: max-line-length
    subject: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    date: "02-Feb",
    category: "all"
  },
  {
    id: 9,
    title: "Boyer-Lubowitz",
    subject: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "13-Nov",
    category: "all"
  },
  {
    id: 10,
    title: "Gutmann, McLaughlin and Nienow",
    // tslint:disable-next-line: max-line-length
    subject: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "25-Jul",
    category: "draft"
  },
  {
    id: 11,
    title: "Lebsack-Schmitt",
    // tslint:disable-next-line: max-line-length
    subject: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    date: "30-Sep",
    category: "draft"
  },
  {
    id: 12,
    unread: true,
    title: "Jacobi-Greenholt",
    // tslint:disable-next-line: max-line-length
    subject: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    date: "16-May",
    category: "all"
  },
  {
    id: 13,
    title: "Kutch, Jacobson and Kozey",
    // tslint:disable-next-line: max-line-length
    subject: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    date: "06-Apr",
    category: "draft"
  },
  {
    id: 14,
    title: "Bernhard and Sons",
    // tslint:disable-next-line: max-line-length
    subject: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "09-Feb",
    category: "all"
  },
  {
    id: 15,
    title: "Kunze Inc",
    // tslint:disable-next-line: max-line-length
    subject: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    date: "11-May",
    category: "draft"
  },
  {
    id: 16,
    title: "Miller Group",
    subject: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    date: "19-Jul",
    category: "sent-mail"
  },
  {
    id: 17,
    title: "Durgan and Sons",
    // tslint:disable-next-line: max-line-length
    subject: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "23-Dec",
    category: "all"
  },
  {
    id: 18,
    title: "Pfannerstill-Kautzer",
    // tslint:disable-next-line: max-line-length
    subject: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    date: "20-Jan",
    category: "all"
  },
  {
    id: 19,
    title: "O'Reilly-Ferry",
    subject: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    date: "29-Apr",
    category: "all"
  },
  {
    id: 20,
    title: "Shields, Jast and Towne",
    // tslint:disable-next-line: max-line-length
    subject: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    date: "16-Feb",
    category: "trash"
  },
  {
    id: 21,
    title: "Mayert-Dickinson",
    // tslint:disable-next-line: max-line-length
    subject: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    date: "30-Dec",
    category: "trash"
  },
  {
    id: 22,
    title: "Little LLC",
    // tslint:disable-next-line: max-line-length
    subject: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "07-Mar",
    category: "trash"
  },
  {
    id: 23,
    title: "Crist, Blanda and Wuckert",
    subject: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "13-Aug",
    category: "all"
  },
  {
    id: 24,
    title: "Williamson-Sanford",
    subject: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    date: "09-Jul",
    category: "all"
  },
  {
    id: 25,
    title: "Gleason-Shanahan",
    // tslint:disable-next-line: max-line-length
    subject: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    date: "13-May",
    category: "all"
  },
  {
    id: 26,
    unread: true,
    title: "Franecki-Hodkiewicz",
    // tslint:disable-next-line: max-line-length
    subject: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    date: "15-Mar",
    category: "all"
  },
  {
    id: 27,
    title: "Bailey-Simonis",
    subject: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "18-Sep",
    category: "all"
  },
  {
    id: 28,
    title: "Grant-Volkman",
    // tslint:disable-next-line: max-line-length
    subject: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    date: "13-Mar",
    category: "all"
  },
  {
    id: 29,
    title: "Kshlerin-Cole",
    // tslint:disable-next-line: max-line-length
    subject: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    date: "21-Nov",
    category: "all"
  },
  {
    id: 30,
    title: "Pouros-Funk",
    // tslint:disable-next-line: max-line-length
    subject: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    date: "05-Jun",
    category: "all"
  },
  {
    id: 31,
    title: "Ziemann-Denesik",
    subject: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    date: "14-Apr",
    category: "all"
  },
  {
    id: 32,
    title: "Johnson LLC",
    // tslint:disable-next-line: max-line-length
    subject: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    date: "30-Nov",
    category: "all"
  },
  {
    id: 33,
    title: "Cummings-Ferry",
    // tslint:disable-next-line: max-line-length
    subject: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    date: "30-Nov",
    category: "all"
  },
  {
    id: 34,
    title: "Weimann-Lueilwitz",
    // tslint:disable-next-line: max-line-length
    subject: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    date: "06-Nov",
    category: "all"
  },
  {
    id: 35,
    unread: true,
    title: "Zieme, Krajcik and Champlin",
    // tslint:disable-next-line: max-line-length
    subject: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "28-Mar",
    category: "all"
  },
  {
    id: 36,
    title: "Toy-Kunde",
    // tslint:disable-next-line: max-line-length
    subject: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    date: "27-Dec",
    category: "all"
  },
  {
    id: 37,
    title: "Mosciski and Sons",
    subject: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    date: "04-Feb",
    category: "all"
  },
  {
    id: 38,
    title: "Lowe, Windler and Wolff",
    // tslint:disable-next-line: max-line-length
    subject: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    date: "13-Mar",
    category: "all"
  },
  {
    id: 39,
    title: "Bruen-Bashirian",
    // tslint:disable-next-line: max-line-length
    subject: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    date: "04-Mar",
    category: "all"
  },
  {
    id: 40,
    title: "Nader, Hickle and Ullrich",
    // tslint:disable-next-line: max-line-length
    subject: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    date: "28-May",
    category: "all"
  },
  {
    id: 41,
    title: "Reilly-Homenick",
    // tslint:disable-next-line: max-line-length
    subject: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    date: "18-Jan",
    category: "all"
  },
  {
    id: 42,
    unread: true,
    title: "O'Connell and Sons",
    // tslint:disable-next-line: max-line-length
    subject: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "03-Aug",
    category: "all"
  }
];

export {
  recentFiles,
  ordersData,
  customersData,
  cartData,
  projectData,
  userGridData,
  userList,
  JobListdata,
  JobGriddata,
  CandidateList,
  listData,
  chatData,
  chatMessagesData,
  JobApplydata,
  tasks,
  memberList,
  orders,
  emailData
};
//# sourceMappingURL=chunk-WL25NFMY.js.map
