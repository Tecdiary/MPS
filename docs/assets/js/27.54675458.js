(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{510:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-guide"}},[e._v("#")]),e._v(" Installation Guide")]),e._v(" "),a("h4",{attrs:{id:"we-have-added-the-installer-for-easy-installation-experience-and-it-can-be-accessed-by-adding-install-at-the-end-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#we-have-added-the-installer-for-easy-installation-experience-and-it-can-be-accessed-by-adding-install-at-the-end-url"}},[e._v("#")]),e._v(" We have added the installer for easy installation experience and it can be accessed by adding "),a("code",[e._v("/install")]),e._v(" at the end url.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#step-1-preparation"}},[e._v("Step 1: Preparation")])]),a("li",[a("a",{attrs:{href:"#step-2-licence-agreement"}},[e._v("Step 2: Licence Agreement")])]),a("li",[a("a",{attrs:{href:"#step-3-pre-install-checklist"}},[e._v("Step 3: Pre-Install Checklist")])]),a("li",[a("a",{attrs:{href:"#step-4-verify-your-license"}},[e._v("Step 4: Verify your License")])]),a("li",[a("a",{attrs:{href:"#step-5-installation-configuration"}},[e._v("Step 5: Installation Configuration")])]),a("li",[a("a",{attrs:{href:"#step-6-create-user-account"}},[e._v("Step 6: Create User Account")])]),a("li",[a("a",{attrs:{href:"#step-7-finalize-installation"}},[e._v("Step 7: Finalize Installation")])]),a("li",[a("a",{attrs:{href:"#step-8-setup-cron-job"}},[e._v("Step 8: Setup Cron job")])]),a("li",[a("a",{attrs:{href:"#step-9-add-required-application-data"}},[e._v("Step 9: Add required application data")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("Installation Difficulty?")]),e._v(" - Laravel installation might be tricky for some users. It will be fine as long as you know how to set domain/subdomain root path or have performed Laravel installation before.")])]),e._v(" "),a("h2",{attrs:{id:"step-1-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-preparation"}},[e._v("#")]),e._v(" Step 1: Preparation")]),e._v(" "),a("h4",{attrs:{id:"please-upload-all-the-extracted-files-and-folder-to-your-server-your-folder-will-have-these-folders-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#please-upload-all-the-extracted-files-and-folder-to-your-server-your-folder-will-have-these-folders-files"}},[e._v("#")]),e._v(" Please upload all the extracted files and folder to your server. Your folder will have these folders & files")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UploadFolder\n        ├── app\n        ├── bootstrap\n        ├── config\n        ├── database\n        ├── modules\n        ├── packages\n        ├── public\n        ├── resources\n        ├── routes\n        ├── storage\n        ├── tests\n        ├── vendor\n        ├── .gitignore\n        ├── .htaccess\n        ├── artisan\n        ├── composer.json\n        ├── composer.lock\n        └── server.php\n        └── webpack.mix.js\n")])])]),a("h4",{attrs:{id:"open-the-folder-in-command-line-terminal-and-run-npm-install-this-required-nodejs-to-be-installed-on-your-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-the-folder-in-command-line-terminal-and-run-npm-install-this-required-nodejs-to-be-installed-on-your-server"}},[e._v("#")]),e._v(" Open the folder in command line/terminal and run "),a("code",[e._v("npm install")]),e._v(" This required nodejs to be installed on your server.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("Developer License?")]),e._v(" - If you have purchased developer license, please run install dependencies before following these steps by running "),a("code",[e._v("composer install")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("Set correct root path")]),e._v(" - You need to set the root path for domain/subdomain to "),a("code",[e._v("public")]),e._v(" directory inside MPS download/extracted files.")])]),e._v(" "),a("h4",{attrs:{id:"you-can-access-the-installer-by-added-install-at-the-end-of-your-domain-i-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#you-can-access-the-installer-by-added-install-at-the-end-of-your-domain-i-e"}},[e._v("#")]),e._v(" You can access the installer by added "),a("code",[e._v("/install")]),e._v(" at the end of your domain i.e,")]),e._v(" "),a("p",[a("code",[e._v("https:")]),e._v(" // "),a("code",[e._v("yourdomain.com")]),e._v(" / "),a("code",[e._v("install")]),e._v(" for main domain installation\n"),a("code",[e._v("https:")]),e._v(" // "),a("code",[e._v("yourdomain.com")]),e._v(" / "),a("code",[e._v("subfolder")]),e._v(" / "),a("code",[e._v("install")]),e._v(" for sub directory installation\n"),a("code",[e._v("https:")]),e._v(" // "),a("code",[e._v("subdomain.yourdomain.com")]),e._v(" / "),a("code",[e._v("install")]),e._v(" for sub domain directory installation")]),e._v(" "),a("p",[e._v("You will need to prepare these details (mentioned at installer page)")]),e._v(" "),a("ol",[a("li",[e._v("License details:\n"),a("ul",[a("li",[e._v("Purchased by ("),a("strong",[e._v("username")]),e._v("/email)")]),e._v(" "),a("li",[e._v("Licence Key / Purchase code")])])]),e._v(" "),a("li",[e._v("Database server details:\n"),a("ul",[a("li",[e._v("Database Hostname")]),e._v(" "),a("li",[e._v("Database Name")]),e._v(" "),a("li",[e._v("Database Username")]),e._v(" "),a("li",[e._v("Database Password "),a("code",[e._v("User must have all the privileges on the database")])])])])]),e._v(" "),a("h2",{attrs:{id:"step-2-licence-agreement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-licence-agreement"}},[e._v("#")]),e._v(" Step 2: Licence Agreement")]),e._v(" "),a("p",[e._v("Please read the license details and accept.")]),e._v(" "),a("h2",{attrs:{id:"step-3-pre-install-checklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-pre-install-checklist"}},[e._v("#")]),e._v(" Step 3: Pre-Install Checklist")]),e._v(" "),a("p",[e._v("If there is any server config change required, you will see the details on this page. You need to resolve these before proceeding to next step. If you are not sure about any issue, simply Google it or check with your host/server administrator.")]),e._v(" "),a("h2",{attrs:{id:"step-4-verify-your-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-verify-your-license"}},[e._v("#")]),e._v(" Step 4: Verify your License")]),e._v(" "),a("p",[e._v("Please fill "),a("code",[e._v("username")]),e._v(" and "),a("code",[e._v("license key")]),e._v("/"),a("code",[e._v("purchase code")]),e._v(" and click next to verify, if you set error, please double check your purchase details and try again. It still same, please email to support@tecdiary.com with your "),a("code",[e._v("license key")]),e._v("/"),a("code",[e._v("purchase code")]),e._v(", we will check and update you.")]),e._v(" "),a("h2",{attrs:{id:"step-5-installation-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-installation-configuration"}},[e._v("#")]),e._v(" Step 5: Installation Configuration")]),e._v(" "),a("p",[e._v("Please fill the form with your database server details "),a("code",[e._v("hostname")]),e._v(", "),a("code",[e._v("database")]),e._v(", "),a("code",[e._v("username")]),e._v(" and "),a("code",[e._v("password")]),e._v(".\nPlease make sure that")]),e._v(" "),a("ul",[a("li",[e._v("database is empty")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("hostname")]),e._v(" is correct")]),e._v(" "),a("li",[e._v("user has all the privileges on the database")])]),e._v(" "),a("h2",{attrs:{id:"step-6-create-user-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-6-create-user-account"}},[e._v("#")]),e._v(" Step 6: Create User Account")]),e._v(" "),a("p",[e._v("Please fill the form to create super user account.")]),e._v(" "),a("h2",{attrs:{id:"step-7-finalize-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-7-finalize-installation"}},[e._v("#")]),e._v(" Step 7: Finalize Installation")]),e._v(" "),a("p",[e._v("We are almost done, it's time to finalize the installation. If you need some demo data, you can generate from this page before pressing the "),a("strong",[e._v("Finalize")]),e._v(" button.")]),e._v(" "),a("p",[a("strong",[e._v("You must press the "),a("code",[e._v("Finalize")]),e._v(" installation button to complete the installation.")])]),e._v(" "),a("h2",{attrs:{id:"step-8-setup-cron-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-8-setup-cron-job"}},[e._v("#")]),e._v(" Step 8: Setup Cron job")]),e._v(" "),a("p",[e._v("Please setup cron job for "),a("br"),a("br"),a("code",[e._v("* * * * * cd /path/to/UploadFolder && php artisan schedule:run >> /dev/null 2>&1")])]),e._v(" "),a("p",[e._v("It's okay to run the schedule every minute as it won't run if there is no task. But if you don't want then you can set to run once/twice an hour.")]),e._v(" "),a("h2",{attrs:{id:"step-9-add-required-application-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-9-add-required-application-data"}},[e._v("#")]),e._v(" Step 9: Add required application data")]),e._v(" "),a("p",[e._v("Please login to app and add following data")]),e._v(" "),a("ol",[a("li",[e._v("Add Account")]),e._v(" "),a("li",[e._v("Add Location")]),e._v(" "),a("li",[e._v("Add Category")]),e._v(" "),a("li",[e._v("Add Customer")]),e._v(" "),a("li",[e._v("Update Settings\n"),a("ul",[a("li",[e._v("App Settings")]),e._v(" "),a("li",[e._v("Mail Settings")]),e._v(" "),a("li",[e._v("Payment Settings")]),e._v(" "),a("li",[e._v("Scale Barcode Settings")]),e._v(" "),a("li",[e._v("Upload default application Logo")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("PDF Attachment")]),e._v(" - MPS used "),a("code",[e._v("rialto-php/puphpeteer")]),e._v(" to generate pdf files, please install npn packages by running "),a("code",[e._v("npm install")]),e._v(" or install "),a("code",[e._v("npm install @nesk/puphpeteer")]),e._v(" in your main directory.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[e._v("Can I start again?")]),e._v(" - Yes, if there is any issue on any step and you can't pass then you can cancel and start over again with new database or settings. If you want to use the same database, please make sure it's empty. If there are any tables, you can drop them.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);