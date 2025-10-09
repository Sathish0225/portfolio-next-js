export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  content: string;
  image: string;
  date: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "kyvra-ai-chatbot",
    category: "Web Application",
    title: "Kyvra Chatbot AI",
    description:
      "Kyvra Chatbot AI is an intelligent conversational assistant powered by Google and OpenAI models. It delivers natural, dynamic, and visually engaging AI-driven interactions through a modern web experience.",
    longDescription:
      "Kyvra Chatbot AI is a next-generation conversational assistant built with Next.js 15 and React 19, combining the power of Google Gemini and OpenAI models for rich, human-like dialogue. Designed with a sleek interface using TailwindCSS, ShadCN, and Framer Motion, the chatbot provides real-time responses, markdown-rendered outputs, and beautiful AI-powered data visualizations. The platform supports dark/light mode, 3D animated backgrounds via Three.js, and interactive UI elements powered by React Hook Form and Zod for seamless user experiences. Kyvra redefines web-based AI interaction by blending performance, design, and intelligence into one unified application.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TailwindCSS 4",
      "Framer Motion",
      "ShadCN/UI",
      "@google/genai",
      "OpenAI API",
    ],
    achievements: [
      "Integrated dual AI engines (Google Gemini & OpenAI) for intelligent and context-aware chatbot interactions",
      "Built a fully responsive and animated UI using TailwindCSS, Framer Motion, and ShadCN components",
      "Implemented real-time markdown rendering with syntax highlighting for dynamic AI-generated content",
      "Added AI-powered data visualization using Recharts for graphical insights within conversations",
      "Enhanced user experience with dark/light theme support and immersive 3D visuals powered by Three.js",
      "Optimized performance with Next.js 15 and Turbopack for ultra-fast development and rendering",
      "Implemented modern notification and validation systems using Sonner, React Hot Toast, and Zod",
    ],
    content: `
    # 🤖 Kyvra AI Chatbot

An intelligent, theme-adaptive AI chatbot built with **Next.js 15**, **React 19**, and **TailwindCSS 4** — powered by **Google Gemini** and **OpenAI GPT** APIs.

![Kyvra AI Screenshot](/images/projects/kyvra/kyvra-preview1.png) ![Kyvra AI Screenshot](/images/projects/kyvra/kyvra-preview2.png)

---

## 🚀 Features

- 💬 **Conversational AI** — Uses \`@google/genai\` and \`openai\` for advanced AI responses  
- 🎨 **Modern UI** — Built with TailwindCSS, Framer Motion, and ShadCN components  
- 🌗 **Dark/Light Theme** — Seamless theme switching using \`next-themes\`  
- 📦 **Fast Rendering** — Powered by \`Next.js 15\` with \`--turbopack\` for lightning-fast builds  
- 📜 **Markdown Support** — AI responses rendered beautifully using \`react-markdown\` + \`remark-gfm\`  
- 📊 **Visualization Ready** — Integrated with \`recharts\` for AI-powered data visualization  
- 🧩 **3D Experience** — \`three.js\` + \`@react-three/fiber\` for immersive 3D chatbot backgrounds or animations  
- 🧠 **Form Validation** — Managed with \`react-hook-form\` and \`zod\`  
- 🔔 **Notifications** — Using \`sonner\` and \`react-hot-toast\` for modern feedback UI

---

## 🏗️ Tech Stack

| Category | Libraries / Frameworks |
|-----------|------------------------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | TailwindCSS 4, clsx, tailwind-merge |
| **Animation** | Framer Motion, tw-animate-css |
| **AI & NLP** | @google/genai, openai |
| **Markdown Rendering** | react-markdown, remark-gfm |
| **UI Components** | shadcn/ui, cmdk, vaul |
| **Forms** | react-hook-form, zod |
| **Charts** | recharts |
| **3D Graphics** | three, @react-three/fiber, @react-three/drei |
| **Themes** | next-themes |
| **Linting** | ESLint, eslint-config-next |

---

## 🧾 License

MIT License © 2025 Sathishkumar Ranganathan
    `,
    image: "/images/projects/kyvra/kyvra-preview1.png",
    date: "2025-10-09",
    github: "https://github.com/Sathish0225/kyvra-chatbot-ai",
    liveUrl: "https://kyvra-chatbot-ai.vercel.app/",
    featured: true,
  },
  {
    id: "iSecure360",
    category: "Web Application",
    title: "iSecure360",
    description:
      "iSecure360 simplifies security workforce and operations management with an intuitive interface, available on both mobile and web platforms. Its multi-tenant setup ensures isolated data for each client while maintaining a single codebase for efficient maintenance.",
    longDescription:
      "iSecure360 is a comprehensive security management platform designed to streamline guard attendance, patrol monitoring, incident reporting, and visitor tracking. It replaces manual logbooks with real-time insights, automated workflows, and customizable reports—empowering organizations to improve safety, compliance, and operational efficiency. With both web and mobile support, iSecure360 ensures seamless communication and accountability across security teams.",
    technologies: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap 4",
      "jQuery",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Deployed across multiple client sites with 500+ active security staff managed daily",
      "Reduced incident reporting time by 40% through real-time mobile app submissions",
      "Enabled offline guard tour logging with auto-sync, ensuring 100% data accuracy even in low-connectivity environments",
      "Improved visitor management efficiency by 60% using QR-based check-in and pre-registration workflows",
    ],
    content: `## iSecure360: Multi-Tenant Security Solution with Laravel

iSecure360 is a comprehensive security management application designed to protect businesses, institutions, and homes. Built on the Laravel framework, it supports a multi-tenant architecture, allowing multiple subdomains (e.g., \`client1.example.com\`, \`client2.example.com\`) to share a single codebase while using separate databases. This guide covers the deployment, multi-subdomain hosting, and tenant management for iSecure360 on an Ubuntu server with Nginx and MariaDB.

---

## 📖 Overview

iSecure360 simplifies security management with an intuitive interface, available on both mobile and web platforms. Its multi-tenant setup enables isolated data for each client (tenant) while maintaining a single codebase for efficient maintenance.

---

## 🚀 Key Features

- **Attendance Module**: Track attendance efficiently.
- **Guard Tour Module**: Monitor guard patrols.
- **Incident Reporting Module**: Log and manage incidents.
- **Visitor Management Module**: Streamline visitor registration and tracking.
- **Supervisor Checklist Module**: Ensure compliance with checklists.
- **Occurrence Module**: Record and analyze security events.
- **Employee Leave Module**: Manage employee leave requests.
- **Payroll Module**: Automate payroll processing for security personnel.
- **Uniform Module**: Manage uniform inventory and assignments.
- **Officer Deployment and Roaster Planning Module**: Schedule and deploy officers effectively.

---

## 🛠️ Server Requirements

To deploy iSecure360, ensure your server meets the following requirements:

| Requirement | Details |
| **PHP** | >= 8.1 |
| **PHP Extensions** | Ctype, cURL, DOM, Fileinfo, Filter, Hash, Mbstring, OpenSSL, PCRE, PDO, Session, Tokenizer, XML, MySQL, Zip, Unzip, JSON, BCMath, GD |
| **Database** | MariaDB (MySQL-compatible) |
| **Web Server** | Nginx |
| **Composer** | Required for dependency management |

---

## 📦 Installation and Setup

Follow these steps to set up iSecure360 with multi-tenant support on an Ubuntu server.

### 1. Install PHP and Extensions

Add the \`ppa:ondrej/php\` repository and install required PHP extensions.

\`\`\`bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php-fpm php-mysql php-mbstring php-zip unzip php-json php-bcmath php-gd php-tokenizer php-xml
\`\`\`

**Note**: The \`zip\` and \`unzip\` extensions are required for Composer, and \`php-mysql\` enables MariaDB connectivity.

### 2. Install Composer Dependencies

Install the application’s Composer dependencies, optimized for production.

\`\`\`bash
composer install --optimize-autoloader --no-dev
composer update
\`\`\`

**Explanation**:

- \`--optimize-autoloader\`: Enhances performance.
- \`--no-dev\`: Excludes development dependencies.

### 3. Configure the \`.env\` File

Set up environment-specific configurations.

\`\`\`bash
cp .env.example .env
php artisan key:generate
\`\`\`

**Steps**:

- Copy \`.env.example\` to \`.env\`.
- Generate a unique \`APP_KEY\`.
- Update \`.env\` with database credentials (central database and tenant databases).

### 4. Set Directory Permissions

Ensure the \`storage\` and \`bootstrap/cache\` directories are writable by the web server user (\`www-data\`).

\`\`\`bash
chown -R www-data:www-data .
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache
\`\`\`

### 5. Install and Configure MariaDB

Install MariaDB for the central and tenant databases.

\`\`\`bash
sudo apt update
sudo apt install mariadb-server
sudo systemctl start mysql
\`\`\`

Secure the MariaDB installation:

\`\`\`bash
sudo mysql_secure_installation
\`\`\`

**Prompt Responses**:

- **Current root password**: Press Enter (default is empty).
- **Change root password?**: Select \`No\`.
- **Remove anonymous users?**: Select \`Yes\`.
- **Disallow root login remotely?**: Select \`Yes\`.
- **Remove test database?**: Select \`Yes\`.
- **Reload privilege tables?**: Select \`Yes\`.

### 6. Create a Database User

Create a MySQL user for the central database and grant privileges.

\`\`\`bash
sudo mysql -u root
CREATE USER 'isecure360'@'localhost' IDENTIFIED BY 'your-password-here';
GRANT ALL PRIVILEGES ON isecure360_central.* TO 'isecure360'@'localhost';
FLUSH PRIVILEGES;
EXIT;
\`\`\`

**Note**: Update the \`.env\` file with these credentials for the central database.

---

## 🏢 Multi-Subdomain Hosting Setup

iSecure360 uses a single Laravel codebase to serve multiple subdomains, each with a separate database. This section outlines two approaches: hardcoded mapping and database-driven tenant management.

### Solution 1: Hardcoded Subdomain-to-Database Mapping

#### Step 1: Configure Database in \`config/database.php\`

Set up a default MySQL connection with dynamic overrides.

\`\`\`php
// config/database.php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'isecure360_central'),
    'username' => env('DB_USERNAME', 'isecure360'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => null,
],
\`\`\`

### Step 2: Dynamically Switch Database in \`app/Providers/AppServiceProvider.php\`

Switch the database based on the subdomain.

\`\`\`php
// app/Providers/AppServiceProvider.php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

public function boot()
{
    $host = request()->getHost(); // e.g., client1.example.com
    $subdomain = explode('.', $host)[0]; // e.g., client1

    $databases = [
        'client1' => 'isecure360_client1',
        'client2' => 'isecure360_client2',
        'client3' => 'isecure360_client3',
    ];

    if (array_key_exists($subdomain, $databases)) {
        Config::set('database.connections.mysql.database', $databases[$subdomain]);
        DB::purge('mysql');
        DB::reconnect('mysql');
    }
}
\`\`\`

#### Step 3: Configure Nginx for Subdomains

Create an Nginx configuration in \`/etc/nginx/sites-available/isecure360\` to handle multiple subdomains.

\`\`\`nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com client1.example.com client2.example.com client3.example.com;
    root /srv/isecure360/public;

    access_log /var/log/nginx/isecure360.access.log;
    error_log /var/log/nginx/isecure360.error.log;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
\`\`\`

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/isecure360 /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
\`\`\`

### Solution 2: Database-Driven Tenant Management

#### Step 1: Configure Database in \`config/database.php\` - Solution 2

Use the same configuration as in Solution 1 (see above).

#### Step 2: Create a \`tenants\` Table

Create a migration for the \`tenants\` table to store tenant metadata.

\`\`\`bash
php artisan make:migration create_tenants_table
\`\`\`

\`\`\`php
// database/migrations/xxxx_xx_xx_create_tenants_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('subdomain')->unique(); // e.g., client1
            $table->string('db_name'); // e.g., isecure360_client1
            $table->string('db_username');
            $table->string('db_password');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
\`\`\`

#### Step 3: Seed the \`tenants\` Table (Optional)

Create a seeder for initial tenant data.

\`\`\`bash
php artisan make:seeder TenantSeeder
\`\`\`

\`\`\`php
// database/seeders/TenantSeeder.php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('tenants')->insert([
            ['subdomain' => 'client1', 'db_name' => 'isecure360_client1', 'db_username' => 'client1_user', 'db_password' => 'secret1'],
            ['subdomain' => 'client2', 'db_name' => 'isecure360_client2', 'db_username' => 'client2_user', 'db_password' => 'secret2'],
            ['subdomain' => 'client3', 'db_name' => 'isecure360_client3', 'db_username' => 'client3_user', 'db_password' => 'secret3'],
        ]);
    }
}
\`\`\`

Run migrations and seeders:

\`\`\`bash
php artisan migrate --seed
\`\`\`

#### Step 4: Dynamically Switch Database in \`app/Providers/AppServiceProvider.php\`

Use the \`tenants\` table to switch databases.

\`\`\`php
// app/Providers/AppServiceProvider.php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Models\Tenant;

public function boot()
{
    $host = request()->getHost();
    $subdomain = explode('.', $host)[0];

    $tenant = Tenant::where('subdomain', $subdomain)->first();

    if ($tenant) {
        Config::set('database.connections.mysql.database', $tenant->db_name);
        Config::set('database.connections.mysql.username', $tenant->db_username);
        Config::set('database.connections.mysql.password', $tenant->db_password);
        DB::purge('mysql');
        DB::reconnect('mysql');
    }
}
\`\`\`

#### Step 5: Configure Nginx for Subdomains

Use the same Nginx configuration as in Solution 1 (see above).

#### Step 6: Clear Config Cache

Ensure configuration changes take effect.

\`\`\`bash
php artisan config:clear
php artisan cache:clear
\`\`\`

---

## 🧑‍💼 Tenant Management Commands

Manage tenants using custom Artisan commands.

### 1. Create Central Database

Initialize the central database for tenant metadata.

\`\`\`bash
php artisan db:create isecure360_central

php artisan migrate --path=database/migrations/central
\`\`\`

### 2. Create Tenant

Create a new tenant with a dedicated database.

\`\`\`bash
php artisan tenant:create <subdomain> <database>
\`\`\`

**Example**:

\`\`\`bash
php artisan tenant:create client1 isecure360_client1
\`\`\`

**Description**:

- Registers the tenant with the \`subdomain\`.
- Creates a database named \`database\`.
- Configures the tenant for migrations and seeders.

### 3. Migrate Tenants

Run migrations for tenant databases.

| Command | Description |
| \`php artisan tenant:migrate\` | Migrates all tenant databases. |
| \`php artisan tenant:migrate <subdomain>\` | Migrates a specific tenant’s database. |
| \`php artisan tenant:migrate --fresh\` | Drops and recreates all tenant databases, then migrates. |
| \`php artisan tenant:migrate <subdomain> --fresh\` | Drops and recreates a specific tenant’s database, then migrates. |

**Examples**:

\`\`\`bash
php artisan tenant:migrate
php artisan tenant:migrate client1
php artisan tenant:migrate --fresh
php artisan tenant:migrate client1 --fresh
\`\`\`

### 4. Migrate and Seed Tenants

Run migrations and seed tenant databases.

| Command | Description |
| \`php artisan tenant:migrate --seed\` | Migrates and seeds all tenants with the default seeder. |
| \`php artisan tenant:migrate <subdomain> --seed\` | Migrates and seeds a specific tenant with the default seeder. |
| \`php artisan tenant:migrate --seed --seeder=<SeederClass>\` | Migrates and seeds all tenants with a specific seeder. |
| \`php artisan tenant:migrate <subdomain> --seed --seeder=<SeederClass>\` | Migrates and seeds a specific tenant with a specific seeder. |

**Examples**:

\`\`\`bash
php artisan tenant:migrate --seed
php artisan tenant:migrate client1 --seed
php artisan tenant:migrate --seed --seeder=TenantUserSeeder
php artisan tenant:migrate client1 --seed --seeder=TenantUserSeeder
\`\`\`

---

## 🔒 SSL Configuration with Certbot

Secure subdomains with SSL certificates.

\`\`\`bash
sudo apt install python3-certbot-nginx
sudo certbot --nginx -d example.com -d client1.example.com -d client2.example.com -d client3.example.com
\`\`\`

**Prompts**:

- Provide an email for renewal notices.
- Agree to the Terms of Service (\`Y\`).
- Opt out of sharing email with EFF (\`N\`).
- Choose to redirect HTTP to HTTPS.

**Expected Output**:

\`\`\`bash
Congratulations! You have successfully enabled https://example.com, https://client1.example.com, ...
\`\`\`

**Notes**:

- Test SSL at [SSL Labs](https://www.ssllabs.com/ssltest/analyze.html).
- Certificates are stored in \`/etc/letsencrypt/live/example.com/\`.
- Automate renewals with \`certbot renew\`.

---

## ⏰ Schedule Laravel Commands

Automate scheduled tasks using a cron job.

\`\`\`bash
crontab -e
\`\`\`

Add:

\`\`\`bash
* * * * * cd /srv/isecure360 && php artisan schedule:run >> /dev/null 2>&1
\`\`\`

**Note**: Replace \`/srv/isecure360\` with your application’s path.

---

## 🔍 Notes

- **Multi-Tenancy**: Solution 1 (hardcoded mapping) is simpler for small setups; Solution 2 (database-driven) is scalable for dynamic tenant management.
- **Database Setup**: Ensure each tenant database (e.g., \`isecure360_client1\`) exists and is accessible by the specified user.
- **Security**: Protect the \`.env\` file and back up \`/etc/letsencrypt\` and databases regularly.
- **Testing**: Verify subdomain routing, database switching, and feature functionality (e.g., Attendance Module) after setup.
- **Cron Jobs**: Ensure the cron job runs as the correct user (e.g., \`www-data\`) to avoid permission issues.
    `,
    image: "/images/projects/isecure360/iSecure360.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "iSecure360-mobile",
    category: "Flutter Application",
    title: "iSecure360 Mobile App",
    description:
      "The Flutter mobile app for iSecure360 empowers security guards to log attendance, patrols, and incidents in real-time, even offline, ensuring seamless operations across multiple client sites.",
    longDescription:
      "The iSecure360 Mobile App is built with Flutter to provide security staff with an intuitive, fast, and offline-capable experience. Guards can log patrols, report incidents, and capture photos directly from the app. All data automatically syncs with the iSecure360 web platform when connectivity is restored, ensuring accurate records. The app supports QR-based visitor check-in and integrates with the main platform for full operational visibility.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "SQLite (Offline Storage)",
      "Push Notifications",
    ],
    achievements: [
      "Enabled offline patrol logging and auto-sync to backend, ensuring 100% data accuracy",
      "Reduced incident reporting time by 50% through real-time mobile submissions",
      "Integrated QR-based visitor check-in for faster on-site processing",
      "Improved accountability and communication between guards and management",
    ],
    content: `# iSecure360 Complete Security Solution

A new Flutter project

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the [online documentation](https://docs.flutter.dev/), which offers tutorials, samples, guidance on mobile development, and a full API reference.
    `,
    image: "/images/projects/isecure360/isecure360-mobile.png",
    date: "2024-09-20",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "iSecureVMS",
    category: "Web Application",
    title: "iSecureVMS",
    description:
      "iSecureVMS streamlines visitor and contractor management with a secure, user-friendly platform available on both web and mobile. It enhances workplace safety and efficiency through digital workflows and real-time monitoring.",
    longDescription:
      "iSecureVMS is a modern visitor management system designed for offices, factories, and secure facilities. It replaces manual logbooks with digital pre-registration, QR-based check-in/out, real-time notifications, and customizable reports. The system supports both visitor and contractor flows, integrates with access control devices, and provides mobile app functionality for seamless on-site operations. With a multi-tenant setup, each client has isolated data security while sharing a single, easily maintainable codebase.",
    technologies: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap 4",
      "jQuery",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Deployed across 20+ client facilities with thousands of monthly visitor check-ins",
      "Reduced lobby congestion by 50% using QR code–based fast check-in/out",
      "Automated email and SMS notifications, improving visitor communication efficiency",
      "Enhanced compliance by digitizing visitor logs and enabling customizable reporting",
    ],
    content: `# iSecureVMS : Visitor Management Software

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Server Requirements

The Laravel framework has a few system requirements. You should ensure that your web server has the following minimum PHP version and extensions:

- PHP >= 8.1
- Ctype PHP Extension
- cURL PHP Extension
- DOM PHP Extension
- Fileinfo PHP Extension
- Filter PHP Extension
- Hash PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PCRE PHP Extension
- PDO PHP Extension
- Session PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

Additionally, I want to add the zip and unzip extensions Composer will use when downloading my dependencies, and the MySQL PHP extension since that’s the database type I’m using in my application.

I can accomplish this using apt, a command line utility for managing packages on Linux systems.

First - I’ll specify a new repository apt can download software packages from. The repository we’re adding is ppa:ondrej/php, the primary source for PHP-related packages.

\`\`\`bash
sudo add-apt-repository ppa:ondrej/php

sudo apt update
\`\`\`

Finally, we can get the necessary extensions. In my case, the command to do that looks like the following.

\`\`\`bash
sudo apt install php-fpm php-mysql php-mbstring unzip php-json php-bcmath php-zip php-gd php-tokenizer php-xml
\`\`\`

## Get dependencies

Next, we need to pull in the application’s Composer dependencies (i.e. our vendor/ directory).

If working on a production server, use the following command so any development-specific dependencies are excluded and the version number of your dependencies match whatever was used in development and written to composer.lock:

\`\`\`bash
composer install --optimize-autoloader --no-dev

composer update
\`\`\`

## Build .env file

Every Laravel application needs a .env file with environment-specific configurations. Because the contents of this file are going to differ from environment to environment, it is not tracked as part of your version control repository (it’s ignored via the .gitignore config file) and therefor you have to manually create it whenever setting up the application in a new environment.

To do this, you can copy the provided .env.example file and update to as appropriate:

\`\`\`bash
cp .env.example .env
\`\`\`

Run the following command to generate the APP_KEY value within your .env file:

\`\`\`bash
php artisan key:generate
\`\`\`

## Set permissions

There are two directories within a Laravel application that need to be writable by the server: storage and bootstrap/cache. Within these directories, the server will write application-specific files such as cache info, session data, error logs, etc.

To allow this to happen, you need to update the permissions of storage and bootstrap/cache so they are owned by the system user your web server is running as.

Run the following command to see which user your Nginx web server runs as:

\`\`\`bash
chown -R www-data:www-data .

chown -R www-data storage
chown -R www-data bootstrap/cache

chmod -R 775 storage
chmod -R 775 storage/*
\`\`\`

## Server Configuration (Nginx) on Ubuntu Server

At this point, everything is set up within our application, we just need to configure our server to run it.

Within /etc/nginx/sites-available/ create a new file with the following content (ref: Nginx deployment guide on offical website). You can call the file whatever you want; I’ll name mine demo after the name of the app.

Within the content update the following:

- server_name should point to the domain (or subdomain) you’re using for this application
- root should point to the path of your Laravel application’s public directory
- The reference to php8.2-fpm.sock should match whatever version of PHP your server is running

\`\`\`bash
    server {
        listen 80;
        listen [::]:80;
        server_name example.com;
        root /srv/example.com/public;

        access_log /var/log/nginx/example.com.access.log;
        error_log /var/log/nginx/example.com.error.log;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-Content-Type-Options "nosniff";

        index index.php;

        charset utf-8;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }

        error_page 404 /index.php;

        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
            include fastcgi_params;
        }

        location ~ /\.(?!well-known).* {
            deny all;
        }
    }
\`\`\`

Next, to enable this config we need to symbolically link the file to the /etc/nginx/sites-enabled directory.

To do this, run the following command, replacing demo with the name of the file you created:

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/demo /etc/nginx/sites-enabled

sudo nginx -t
\`\`\`

Expected output:

\`\`\`bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
\`\`\`

If all looks good, restart Nginx to make the changes take effect:

\`\`\`bash
systemctl restart nginx
\`\`\`

## To Install Certbot

\`\`\`bash
sudo apt install python3-certbot-nginx

sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

After you execute this command there will be a couple of entries that you will need to fill, such as the email address, agreement about the terms and conditions, if you want to share your email adress or not, and the redirect options.

\`\`\`bash
root@vps:~# sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): admin@yourdomain.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)yes/(N)no: Y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: N
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for yourdomain.com
http-01 challenge for www.yourdomain.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-available/yourdomain.com
\`\`\`

If everything is set up as should be the certificate will be installed and you will receive the message below.

\`\`\`bash
Congratulations! You have successfully enabled https://yourdomain.com and https://www.yourdomain.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=yourdomain.com
https://www.ssllabs.com/ssltest/analyze.html?d=www.yourdomain.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/yourdomain.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/yourdomain.com/privkey.pem
   Your cert will expire on 2022-05-07. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
\`\`\`

## MySql Mariadb Database Configuration

To install mariaDB, first run the following command to update the package index on your server:

\`\`\`bash
sudo apt update
\`\`\`

Then, run the following command to install:

\`\`\`bash
sudo apt install mariadb-server
\`\`\`

you can start the database service by run the following command:

\`\`\`bash
systemctl start mysql
\`\`\`

To secure your installation, after installation, it's suggested you secure your installation with the following command:

\`\`\`bash
sudo mysql_secure_installation
\`\`\`

Here are a summary of responses for each prompt it presents you with:

- when it asks **Enter current Password for root (enter for none)**:leave it blank and hit enter
- when it asks you if you want to...
- Change the root password?, enter **No**.
- Remove anonymous users?, enter **Yes**.
- Disallow root login remotely?, enter **Yes**.
- Remove test database and access to it?, enter **Yes**.
- Reload previlege tables now?, enter **Yes**.

## New User in Mysql database

Run the following command to create new user for mysql database:

\`\`\`bash
sudo mysql -u root

CREATE USER 'your-username-here'@'localhost' IDENTIFIED BY 'your-password-here';
\`\`\`

Next, we need to grant the username privileges to manage the database:

\`\`\`bash
GRANT ALL PRIVILEGES ON your-database-name-here . * TO 'your-username-here'@'localhost';
\`\`\`
    `,
    image: "/images/projects/isecurevms/iSecureVMS.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "iSecureVMS-mobile",
    category: "Flutter Application",
    title: "iSecureVMS Mobile App",
    description:
      "The Flutter mobile app for iSecureVMS empowers reception staff, security officers, and hosts to manage visitor and contractor activities in real time, with offline support and QR code check-in/out.",
    longDescription:
      "The iSecureVMS Mobile App, built with Flutter, extends the web platform’s capabilities directly to smartphones and tablets. Security officers and reception staff can check in/out visitors via QR code scanning, view upcoming pre-registered visitors, and log contractor entries. Hosts receive instant push notifications upon visitor arrival. Offline-first support ensures check-in/out can still be performed during connectivity issues, with data syncing automatically once online. The app integrates seamlessly with access control devices and the iSecureVMS web backend for complete visitor management.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Push Notifications",
      "QR Code Scanner",
    ],
    achievements: [
      "Streamlined visitor and contractor check-in with QR code scanning",
      "Delivered push notifications to hosts for real-time visitor arrival alerts",
      "Enabled offline visitor logging with auto-sync, ensuring no data loss",
      "Improved front-desk efficiency by 45% compared to manual processes",
    ],
    content: `# iSecureVMS: Visitor Management System

A new Flutter project

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the [online documentation](https://docs.flutter.dev/), which offers tutorials, samples, guidance on mobile development, and a full API reference.
    `,
    image: "/images/projects/isecurevms/isecurevms-mobile.png",
    date: "2024-09-20",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "avms",
    category: "Web Application",
    title: "AVMS",
    description:
      "AVMS is a comprehensive Access Control and Visitor Management System for condos, offices, and secure facilities, combining visitor, vehicle, and facility management in one seamless platform across web and mobile.",
    longDescription:
      "AVMS is an integrated platform designed for residential condos, offices, and high-security facilities. It goes beyond visitor management by offering modules for Vehicle Registration, Access Control, Facility Booking, Feedback, and E-Forms. The system streamlines daily operations with digital pre-registration, QR-based check-in/out, license plate recognition (LPR) for vehicles, and real-time notifications. Residents and administrators benefit from a unified web and mobile solution powered by React.js, Flutter, and MySQL. With a secure multi-tenant architecture, each property enjoys isolated data security while sharing a single, maintainable codebase.",
    technologies: [
      "React.js",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "MySQL",
      "Laravel PHP (Backend)",
      "Flutter (Mobile App)",
      "Node.js",
    ],
    achievements: [
      "Deployed across 20+ condominium and corporate facilities with thousands of monthly visitor and vehicle check-ins",
      "Reduced lobby and gate congestion by 50% with QR-based and LPR-based fast access",
      "Automated notifications (email, SMS, and push), improving communication with residents and visitors",
      "Enhanced compliance and audit readiness with digital visitor logs, vehicle access history, and facility booking reports",
      "Enabled residents to seamlessly book facilities, submit feedback, and complete e-forms through mobile apps",
      "Strengthened security with centralized Access Control Module integrating with turnstiles, barriers, and ANPR cameras",
    ],
    content: `# iSecure360-AVMS

## About iSecure360-AVMS

Access Control & Vehicle Management System is a powerful and user-friendly solution designed to manage and monitor access control and vehicle movements in real-time. Ideal for residential communities, office premises, industrial zones, and other secured locations, this app ensures seamless security operations and efficient visitor handling.

Availble on both mobile and web based system.

## Key Features

- Vehicle Module
- Access Control Module
- Facility Booking Module
- Feedback Module
- E-Form Module

## Server Requirements

The Laravel framework has a few system requirements. You should ensure that your web server has the following minimum PHP version and extensions:

- PHP >= 8.2
- Ctype PHP Extension
- cURL PHP Extension
- DOM PHP Extension
- Fileinfo PHP Extension
- Filter PHP Extension
- Hash PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PCRE PHP Extension
- PDO PHP Extension
- Session PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

Additionally, I want to add the zip and unzip extensions Composer will use when downloading my dependencies, and the MySQL PHP extension since that’s the database type I’m using in my application.

I can accomplish this using apt, a command line utility for managing packages on Linux systems.

First - I’ll specify a new repository apt can download software packages from. The repository we’re adding is ppa:ondrej/php, the primary source for PHP-related packages.

\`\`\`bash
sudo add-apt-repository ppa:ondrej/php

sudo apt update
\`\`\`

Finally, we can get the necessary extensions. In my case, the command to do that looks like the following.

\`\`\`bash
sudo apt install php-fpm php-mysql php-mbstring unzip php-json php-bcmath php-zip php-gd php-tokenizer php-xml
\`\`\`

## Get dependencies

Next, we need to pull in the application’s Composer dependencies (i.e. our vendor/ directory).

If working on a production server, use the following command so any development-specific dependencies are excluded and the version number of your dependencies match whatever was used in development and written to composer.lock:

\`\`\`bash
composer install --optimize-autoloader --no-dev

composer update
\`\`\`

## Build .env file

Every Laravel application needs a .env file with environment-specific configurations. Because the contents of this file are going to differ from environment to environment, it is not tracked as part of your version control repository (it’s ignored via the .gitignore config file) and therefor you have to manually create it whenever setting up the application in a new environment.

To do this, you can copy the provided .env.example file and update to as appropriate:

\`\`\`bash
cp .env.example .env
\`\`\`

Run the following command to generate the APP_KEY value within your .env file:

\`\`\`bash
php artisan key:generate
\`\`\`

## Set permissions

There are two directories within a Laravel application that need to be writable by the server: storage and bootstrap/cache. Within these directories, the server will write application-specific files such as cache info, session data, error logs, etc.

To allow this to happen, you need to update the permissions of storage and bootstrap/cache so they are owned by the system user your web server is running as.

Run the following command to see which user your Nginx web server runs as:

\`\`\`bash
chown -R www-data:www-data .

chown -R www-data storage
chown -R www-data bootstrap/cache

chmod -R 775 storage
chmod -R 775 storage/*
\`\`\`

## Server Configuration (Nginx) on Ubuntu Server

At this point, everything is set up within our application, we just need to configure our server to run it.

Within /etc/nginx/sites-available/ create a new file with the following content (ref: Nginx deployment guide on offical website). You can call the file whatever you want; I’ll name mine demo after the name of the app.

Within the content update the following:

- server_name should point to the domain (or subdomain) you’re using for this application
- root should point to the path of your Laravel application’s public directory
- The reference to php8.2-fpm.sock should match whatever version of PHP your server is running

\`\`\`bash
    server {
        listen 80;
        listen [::]:80;
        server_name example.com;
        root /srv/example.com/public;

        access_log /var/log/nginx/example.com.access.log;
        error_log /var/log/nginx/example.com.error.log;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        index index.php;

        charset utf-8;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location /build/ {
                alias /srv/example.com/public/build/;
                try_files $uri $uri/ /index.php?$query_string;
        }

        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }

        error_page 404 /index.php;

        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
            include fastcgi_params;
            fastcgi_read_timeout 300;
            fastcgi_buffers 16 16k;    # Increase buffer count and size
            fastcgi_buffer_size 32k;   # Increase initial buffer size
        }

        location ~ /\.(?!well-known).* {
            deny all;
        }
    }
\`\`\`

Next, to enable this config we need to symbolically link the file to the /etc/nginx/sites-enabled directory.

To do this, run the following command, replacing demo with the name of the file you created:

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/demo /etc/nginx/sites-enabled

sudo nginx -t
\`\`\`

Expected output:

\`\`\`bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
\`\`\`

If all looks good, restart Nginx to make the changes take effect:

\`\`\`bash
systemctl restart nginx
\`\`\`

## To Install Certbot

\`\`\`bash
sudo apt install python3-certbot-nginx

sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

After you execute this command there will be a couple of entries that you will need to fill, such as the email address, agreement about the terms and conditions, if you want to share your email adress or not, and the redirect options.

\`\`\`bash
root@vps:~# sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): admin@yourdomain.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)yes/(N)no: Y

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: N
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for yourdomain.com
http-01 challenge for www.yourdomain.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-available/yourdomain.com
\`\`\`

If everything is set up as should be the certificate will be installed and you will receive the message below.

\`\`\`bash
Congratulations! You have successfully enabled https://yourdomain.com and https://www.yourdomain.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=yourdomain.com
https://www.ssllabs.com/ssltest/analyze.html?d=www.yourdomain.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/yourdomain.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/yourdomain.com/privkey.pem
   Your cert will expire on 2022-05-07. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
\`\`\`

## MySql Mariadb Database Configuration

To install mariaDB, first run the following command to update the package index on your server:

\`\`\`bash
sudo apt update
\`\`\`

Then, run the following command to install:

\`\`\`bash
sudo apt install mariadb-server
\`\`\`

you can start the database service by run the following command:

\`\`\`bash
systemctl start mysql
\`\`\`

To secure your installation, after installation, it's suggested you secure your installation with the following command:

\`\`\`bash
sudo mysql_secure_installation
\`\`\`

Here are a summary of responses for each prompt it presents you with:

- when it asks **Enter current Password for root (enter for none)**:leave it blank and hit enter
- when it asks you if you want to...
- Change the root password?, enter **No**.
- Remove anonymous users?, enter **Yes**.
- Disallow root login remotely?, enter **Yes**.
- Remove test database and access to it?, enter **Yes**.
- Reload previlege tables now?, enter **Yes**.

## New User in Mysql database

Run the following command to create new user for mysql database:

\`\`\`bash
sudo mysql -u root

CREATE USER 'your-username-here'@'localhost' IDENTIFIED BY 'your-password-here';
\`\`\`

Next, we need to grant the username privileges to manage the database:

\`\`\`bash
GRANT ALL PRIVILEGES ON your-database-name-here . * TO 'your-username-here'@'localhost';
\`\`\`

## To Support QR Code, please follow below instructions

Install Browsershot: Install spatie/browsershot to convert HTML to an image:

\`\`\`bash
composer require spatie/browsershot
\`\`\`

Install Puppeteer (Node.js dependency):

\`\`\`bash
sudo -u www-data npm install puppeteer
\`\`\`

Install Chrome or chrome-headless-shell:

\`\`\`bash
sudo -u www-data npx puppeteer browsers install chrome-headless-shell
\`\`\`

This will download and install chrome-headless-shell to the default Puppeteer cache directory (/var/www/.cache/puppeteer). Ensure the user running the PHP process (e.g., www-data for Apache/Nginx) has write permissions to this directory:

\`\`\`bash
sudo mkdir -p /var/www/.cache/puppeteer
sudo chown -R www-data:www-data /var/www/.cache/puppeteer
sudo chmod -R 775 /var/www/.cache/puppeteer
\`\`\`

Verify the installation:

\`\`\`bash
ls -l /var/www/.cache/puppeteer/chrome-headless-shell
\`\`\`

You should see a directory like linux-138.0.7204.168 containing chrome-headless-shell. If it’s still missing, check for errors during the npx command output (e.g., network issues, permissions).

## For Running Laravel commands automatically

Open terminal and enter below command

\`\`\`bash
crontab -e
\`\`\`

Once crontab file opened, enter below command

\`\`\`bash
* * * * * cd /path/to/your/Laravel/app && php artisan schedule:run >> /dev/null 2>&1
\`\`\`

## For Running Laravel Queue automatically

Open terminal and enter below command

\`\`\`bash
sudo nano /etc/supervisor/conf.d/laravel-worker.conf
\`\`\`

Paste the following content (update paths accordingly):

\`\`\`bash
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/project_folder/artisan queue:work database --sleep=3 --tries=3 --timeout=90
autostart=true
autorestart=true
user=kumar
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/project_folder/storage/logs/laravel-queue.log
stopwaitsecs=3600
\`\`\`

Important:

- Adjust /var/www/project_folder to your Laravel project path.
- Set user=username to match the system user who owns the Laravel files (same as ls -lrt output).

Reload Supervisor

\`\`\`bash
sudo supervisorctl reread
sudo supervisorctl update
\`\`\`

Start the Laravel queue worker

\`\`\`bash
sudo supervisorctl start laravel-worker:*
\`\`\`

To check status:

\`\`\`bash
sudo supervisorctl status
\`\`\`

To reload:

\`\`\`bash
sudo supervisorctl restart laravel-worker:*
\`\`\`
    `,
    image: "/images/projects/avms/avms.png",
    date: "2025-04-01",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "avms-mobile",
    category: "Flutter Application",
    title: "AVMS Mobile App",
    description:
      "The Flutter mobile companion app for AVMS empowers residents, visitors, and security staff with real-time access control, visitor management, vehicle registration, and facility booking—all from their smartphones.",
    longDescription:
      "The AVMS Mobile App, built with Flutter, extends the AVMS platform to iOS and Android devices. Residents can pre-register visitors, receive real-time arrival notifications, book facilities, and submit feedback or e-forms directly through the app. Security staff can scan QR codes, log visitor/vehicle entries, and handle incidents instantly on mobile. With offline-first capabilities and auto-sync, the app ensures uninterrupted operation even in areas with poor connectivity. Push notifications keep all stakeholders informed, while integration with LPR cameras and access control devices provides a seamless end-to-end experience for modern residential and corporate facilities.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Push Notifications",
      "QR Code Scanner",
      "Camera Integration (LPR)",
    ],
    achievements: [
      "Delivered real-time visitor arrival notifications to residents via push alerts",
      "Enabled seamless facility booking and e-form submissions through mobile",
      "Supported QR-based and LPR-integrated check-in/out for residents and visitors",
      "Improved gate/lobby efficiency by 50% with mobile-based fast access workflows",
    ],
    content: `## 📱 AVMS Mobile App  

The **AVMS Mobile App** is designed to bring the power of **Access Control and Visitor Management** directly into the hands of residents, visitors, and security staff. With a modern **Flutter-based cross-platform** design, it works seamlessly on both **iOS and Android** devices.  

---

### 🚀 Key Features

- **Visitor Management** – Residents can pre-register visitors, and security staff can scan QR codes for quick check-in/out.  
- **Vehicle Access** – Integrated with **License Plate Recognition (LPR)** for automated vehicle entry logging.  
- **Facility Booking** – Residents can book facilities such as gyms, function rooms, or pools directly from the app.  
- **Real-time Notifications** – Push alerts notify residents instantly when visitors arrive or bookings are approved.
- **E-Forms & Feedback** – Digitized forms and feedback submission improve efficiency and compliance.  

---

### 🛠️ Technology Stack

- **Flutter & Dart** for cross-platform app development  
- **REST API** for seamless integration with the AVMS backend  
- **Push Notifications** for real-time communication  
- **QR Code Scanner** for fast and secure check-ins  
- **Camera Integration (LPR)** for vehicle management  

---

### 🏆 Achievements

- Reduced **gate and lobby congestion by 50%** using QR and LPR-based fast access  
- Delivered **instant notifications** to residents for improved communication  
- Enabled **seamless mobile facility booking** with a smooth user experience  
- Strengthened **security accountability** by empowering guards with a mobile tool  

---

### 📸 App Previews  

![E-Form](/images/projects/avms/avms-eform.png) ![Facility Booking](/images/projects/avms/avms-facility.png) ![Notifications](/images/projects/avms/avms-notification.png)

---

### 🌐 Integration

The app integrates seamlessly with:  
- **AVMS Web Platform** for centralized management  
- **LPR Cameras** for automated vehicle access  
- **Turnstiles & Barriers** for secure entry/exit  
- **Access Control Devices** for facility security  

---

💡 With AVMS Mobile App, **residents, visitors, and security teams** experience a **smarter, faster, and more secure way** to manage daily operations.
    `,
    image: "/images/projects/avms/avms-mobile.png",
    date: "2025-04-05",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "vrs",
    category: "Windows Application",
    title: "VRS (Vehicle Registration System)",
    description:
      "VRS is a Windows-based Vehicle Registration System designed to log visitor and resident vehicle movement with integrated live video feed and automatic license plate recognition (ANPR).",
    longDescription:
      "The Vehicle Registration System (VRS) is a desktop application tailored for condominiums, offices, and secure facilities to streamline vehicle entry and exit management. Built using C# WinForms and integrated with Hikvision ANPR cameras, the system automatically captures license plate numbers and logs vehicle movement in real time. Security staff can monitor live video feeds directly from the application, while all vehicle activity is securely stored in a MySQL database for reporting and auditing. The solution enhances gate security, reduces manual entry errors, and ensures accurate visitor and resident vehicle tracking.",
    technologies: [
      "C# WinForms",
      "Hikvision ANPR API",
      "MySQL",
      "Windows Desktop Application",
    ],
    achievements: [
      "Successfully deployed across multiple condominiums and corporate sites for vehicle access control",
      "Automated license plate recognition reduced manual entry errors and improved gate processing efficiency",
      "Integrated live video feed allowed security teams to verify vehicle entry in real time",
      "Maintained accurate and searchable records of vehicle entry/exit for compliance and security audits",
      "Improved visitor vehicle tracking and reduced gate congestion by automating the registration process",
    ],
    content: ``,
    image: "/images/projects/vrs/vehicle-registration-system.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "lpr-announcement",
    category: "Windows Application",
    title: "LPR & Announcement System",
    description:
      "A Windows-based License Plate Recognition and Announcement System using Dahua ANPR cameras, C#, and MySQL to automate vehicle logging and provide real-time text-to-speech announcements.",
    longDescription:
      "The LPR & Announcement System is a desktop application built with C# to enhance vehicle access management in schools, condominiums, offices, and gated communities. Integrated with Dahua ANPR cameras, the system automatically captures and logs license plates into a MySQL database. It features real-time text-to-speech (TTS) announcements to alert security staff or residents of vehicle entry and exit events. The system ensures seamless monitoring of vehicle movement, reduces manual workload for security teams, and improves overall site security by providing both visual and audio confirmation of entries.",
    technologies: [
      "C# WinForms",
      "Dahua ANPR Camera API",
      "Text-to-Speech (TTS)",
      "MySQL",
      "Windows Desktop Application",
    ],
    achievements: [
      "Successfully deployed for automated vehicle entry logging and announcement at secure facilities",
      "Integrated with Dahua ANPR cameras for accurate, real-time license plate recognition",
      "Implemented text-to-speech announcements to notify security and residents during vehicle entry",
      "Reduced manual effort of guards by automating both logging and audio confirmation processes",
      "Ensured reliable vehicle tracking with centralized storage of all entry/exit events in MySQL",
    ],
    content: ``,
    image: "/images/projects/lpr_announcement/lpr-announcement.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "idata-label-printer",
    category: "Flutter Plugin",
    title: "iData Label Printer",
    description:
      "A custom Flutter plugin for Android that enables seamless Bluetooth connectivity with iData thermal and label printers for on-demand printing.",
    longDescription:
      "The iData Label Printer plugin is a Flutter package designed to simplify integration with iData thermal and label printers over Bluetooth. Built for Android, it allows developers to easily print text, barcodes, and labels directly from their Flutter applications without relying on third-party SDKs. The plugin manages Bluetooth discovery, pairing, and communication with the printer, ensuring fast and reliable print operations. It is optimized for enterprise use cases such as inventory management, logistics, and visitor management systems requiring portable label printing.",
    technologies: [
      "Flutter",
      "Dart",
      "Bluetooth API (Android)",
      "iData Printer SDK",
    ],
    achievements: [
      "Developed a reusable Flutter plugin for Android supporting iData label and thermal printers",
      "Enabled seamless Bluetooth pairing and printing of text, barcodes, and QR codes from mobile apps",
      "Optimized for enterprise scenarios such as inventory labeling, logistics, and visitor badge printing",
      "Reduced integration complexity by abstracting low-level printer SDK details into simple Flutter APIs",
    ],
    content: ``,
    image: "/images/projects/idata_label_printer/iDataLabelPrinter.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/idata_label_printer",
    liveUrl: "https://pub.dev/packages/idata_label_printer",
    featured: false,
  },
  {
    id: "srm",
    category: "Web Application",
    title: "SRM (Service Report Management System)",
    description:
      "A Service Report Management System built with CodeIgniter 4, Bootstrap 4, and MySQL, with a companion Flutter app for field technicians to manage service reports on the go.",
    longDescription:
      "SRM is a complete Service Report Management System designed to streamline service operations for organizations. The web platform, built with CodeIgniter 4, Bootstrap 4, and MySQL, provides administrators with tools to manage clients, service requests, and reports through an intuitive CRUD interface. The companion Flutter mobile app empowers technicians to log service activities, capture client signatures, and update report statuses in real time. This unified solution improves efficiency, reduces paperwork, and ensures timely and accurate service reporting across teams.",
    technologies: [
      "CodeIgniter 4 (PHP)",
      "Bootstrap 4",
      "MySQL",
      "CRUD Operations",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Developed a full-stack service management system with web and mobile integration",
      "Enabled technicians to log reports and capture client signatures directly from the Flutter app",
      "Reduced paperwork and manual errors by digitizing service reports",
      "Implemented CRUD-based workflows for managing clients, services, and reports",
      "Improved operational efficiency by synchronizing mobile updates with the web system in real time",
    ],
    content: ``,
    image: "/images/projects/srm/service_order.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "inventory-system",
    category: "Web Application",
    title: "Inventory Management System",
    description:
      "A web-based Inventory Management System built with Core PHP, MySQL, and HTML to track, manage, and update stock efficiently.",
    longDescription:
      "The Inventory Management System is a simple yet effective web application designed to help businesses manage stock and inventory operations. Built using Core PHP and MySQL, the system provides full CRUD functionality for products, categories, suppliers, and stock entries. A clean HTML-based interface allows users to easily add, edit, delete, and view inventory items. The system ensures accurate tracking of stock levels, reduces manual errors, and provides a foundation for small to medium-sized business inventory management.",
    technologies: ["Core PHP", "MySQL", "HTML", "CRUD Operations"],
    achievements: [
      "Developed a full CRUD-based inventory management application using Core PHP and MySQL",
      "Enabled businesses to efficiently track stock levels, categories, and suppliers",
      "Provided a clean HTML interface for easy product and stock management",
      "Reduced manual errors and improved accuracy of inventory records",
      "Created a lightweight system suitable for small to medium-sized enterprises",
    ],
    content: ``,
    image: "/images/projects/inventory/inventory_system.png",
    date: "2024-09-15",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "code-editor-io",
    category: "Web Application",
    title: "Code Editor io",
    description:
      "An online code and markdown editor built with React.js, featuring live preview, GitHub Flavored Markdown (GFM) support, and local auto-save.",
    longDescription:
      "Code Editor io is a web-based tool designed for developers to quickly prototype websites and write markdown documents. The code editor supports HTML, CSS, and JavaScript with instant live preview of changes, making it easy to test and visualize ideas in real time. The markdown editor supports GitHub Flavored Markdown (GFM), custom HTML tags, and includes a toolbar for formatting with an instant preview panel. Both editors feature auto-save functionality powered by Local Storage, ensuring users never lose their work. The platform is ideal for building README files, testing code snippets, or learning web development basics.",
    technologies: ["React.js", "HTML", "CSS", "Local Storage API"],
    achievements: [
      "Built a dual-mode editor for both code and markdown with real-time preview",
      "Implemented GitHub Flavored Markdown (GFM) support with custom HTML tag rendering",
      "Added a rich toolbar to simplify markdown editing for non-technical users",
      "Enabled offline persistence with auto-save using browser Local Storage",
      "Created a lightweight, browser-based alternative to desktop editors for quick prototyping",
    ],
    content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### \`npm run build\` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
    `,
    image: "/images/projects/workouts/code-editor-io.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/code-editor",
    liveUrl: "https://code-editor-sigma-one.vercel.app/",
    featured: false,
  },
  {
    id: "shareease",
    category: "Web Application",
    title: "ShareEase",
    description:
      "ShareEase is a secure and user-friendly file sharing platform designed for easy and efficient exchange of files.",
    longDescription:
      "ShareEase is an intuitive web application that enables users to upload, manage, and share files of various types and sizes with ease. Built with Node.js, Express, React.js, and MongoDB, the platform ensures secure storage and fast file delivery. Real-time collaboration is powered by Socket.IO, allowing instant updates and notifications when files are shared. With its responsive Bootstrap-based design, ShareEase provides a simple yet robust solution for both personal and team-based file sharing.",
    technologies: [
      "Node.js",
      "Express",
      "React.js",
      "Bootstrap",
      "MongoDB",
      "Socket.IO",
    ],
    achievements: [
      "Built a full-stack file sharing application with secure file handling",
      "Integrated real-time notifications and updates using Socket.IO",
      "Designed a responsive and intuitive UI with Bootstrap and React",
      "Implemented scalable storage and retrieval using MongoDB",
      "Enhanced collaboration by allowing quick file exchange between users",
    ],
    content: `# ShareEase

ShareEase is an intuitive and secure file sharing platform designed to facilitate easy and efficient exchange of files between users. It offers a user-friendly interface for uploading, managing, and sharing files of various types and sizes. Key features include:

- Simple File Upload: Drag-and-drop or select files to upload with ease.
- Secure Sharing: Robust encryption ensures files are shared securely.
- User Management: Control who can access and edit files through customizable permissions.
- Cross-Platform Access: Available on web for convenient access anywhere.

## Technology used

- Backend: **NodeJS**, **Express**
- Database: **MongoDB**
- FrontEnd: **ReactJS**
- Pub-Sub: **Socket.IO**.

## App Preview

![image-20240722103252](/images/projects/workouts/image-20240722103252.png) ![image-20240722103413](/images/projects/workouts/image-20240722103413.png) ![image-20240722144329](/images/projects/workouts/image-20240722144329.png) ![image-20240722144414](/images/projects/workouts/image-20240722144414.png) ![image-20240722144448](/images/projects/workouts/image-20240722144448.png)

## Features

- Login, Register, Authentication using JWT Token.
- Database.
- Upload/Share/Unshare/Edit/Remove/Download file with other user - with Authentication
- Pub-sub model on file with real time update.

### What can user do?

1. User can create an account/register an account. To register, the email must not be used by any other user.
2. User can upload/share/delete his file with anyone who is in the system.
3. If user shared with someone, user can remove his file from sharing with that person, or choose not to share with anyone.
4. User can rename the file - **by clicking at the name of the file**.
5. User can see which file is shared with him, he can choose to unshare it if he wants.
6. User have real-time update on the file he subscribes (is shared/owned) to.
7. User can download if the file is shared to him or is owned by him. - Only user who has these privilege can download the file

## How to run

Go to server, install and start the server

\`\`\`bash
cd server/
npm install && npm start
\`\`\`

Server should be in \`localhost:5000\`. Please reserve this port for the application, else you can modify it in \`Constants.js\`

Go to client, install and start the server

\`\`\`bash
cd client/
npm install && npm start
\`\`\`

You can access the website in \`localhost:3000\` by default

### For testing':'

Please leave both front-back end application on.

Client

\`\`\`bash
cd client/
npm run test
\`\`\`

> Your chrome browser’s version has to be 77 and above for the test to run.

Server

\`\`\`bash
cd server/
npm run test
\`\`\`

That’s it. Now enjoy the application running.
    `,
    image: "/images/projects/workouts/shareease.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/shareease",
    liveUrl: "https://shareease.vercel.app/",
    featured: false,
  },
  {
    id: "todo-app",
    category: "Web Application",
    title: "Todo App",
    description:
      "A simple yet powerful to-do list app to manage tasks, deadlines, and priorities efficiently.",
    longDescription:
      "The Todo App is designed to help users stay organized and improve productivity. With an intuitive interface built using React.js, tasks can be easily added, updated, or removed. Users can set deadlines and prioritize tasks to focus on what matters most. The backend powered by Node.js ensures scalability, while a lightweight frontend built with HTML and CSS provides a smooth user experience.",
    technologies: ["Node.js", "React.js", "HTML", "CSS"],
    achievements: [
      "Developed a clean and user-friendly task management app",
      "Enabled deadline tracking and task prioritization",
      "Simplified collaboration with task lists accessible via the web",
      "Improved productivity for personal and team use",
    ],
    content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### \`npm run build\` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
    `,
    image: "/images/projects/workouts/todo-list-app.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/todo-list-app",
    liveUrl: "https://todo-list-app-three-theta.vercel.app/",
    featured: false,
  },
  {
    id: "old-portfolio",
    category: "Portfolio",
    title: "Old Portfolio",
    description:
      "A professional portfolio website to showcase skills, projects, and achievements.",
    longDescription:
      "The Old Portfolio was a personal website designed to highlight projects, professional achievements, and technical skills. Built with React.js, TailwindCSS, HTML, and CSS, it featured a responsive and modern design that helped in connecting with potential employers and clients. The portfolio showcased creativity and technical expertise while leaving a lasting impression.",
    technologies: ["React.js", "HTML", "CSS", "TailwindCSS"],
    achievements: [
      "Created a personal portfolio website to showcase work and achievements",
      "Implemented a responsive design using TailwindCSS",
      "Enhanced professional visibility and networking opportunities",
      "Served as a foundation for later upgraded portfolio projects",
    ],
    content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### \`npm run build\` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
    `,
    image: "/images/projects/workouts/portfolio-old.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/portfolio-website",
    liveUrl: "",
    featured: false,
  },
  {
    id: "sudoku-solver",
    category: "Web Application",
    title: "Sudoku Solver",
    description:
      "A web-based Sudoku solver that instantly solves valid puzzles entered by the user.",
    longDescription:
      "Sudoku Solver is a React.js application designed to assist users in solving Sudoku puzzles quickly. Users can input any valid Sudoku configuration, and the app instantly calculates and displays the solution. Built with React, HTML, and CSS, the tool is lightweight, fast, and a great learning exercise in algorithm implementation.",
    technologies: ["React.js", "HTML", "CSS"],
    achievements: [
      "Built a functional Sudoku solving application using React",
      "Implemented efficient backtracking algorithm for solving puzzles",
      "Created a clean and responsive UI for user-friendly puzzle input",
      "Helped users solve challenging Sudoku puzzles within seconds",
    ],
    content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### \`npm run build\` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
    `,
    image: "/images/projects/workouts/sudoku-solver.png",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/sudoku-solver",
    liveUrl: "https://sudoku-solver-gilt-eight.vercel.app/",
    featured: false,
  },
  {
    id: "small-workouts",
    category: "Workouts",
    title: "Small Workouts",
    description:
      "A collection of short coding challenges to strengthen understanding of JavaScript functions.",
    longDescription:
      "Small Workouts is a set of bite-sized exercises designed to improve programming fundamentals, especially function logic in JavaScript. These challenges are implemented in plain HTML, CSS, and JavaScript, focusing on core problem-solving skills without external libraries. The project serves as a learning tool to sharpen coding abilities through hands-on practice.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Designed multiple small exercises to reinforce JavaScript concepts",
      "Strengthened understanding of functions and logic building",
      "Provided a lightweight environment for quick coding practice",
      "Helped in improving problem-solving and algorithmic thinking",
    ],
    content: `# Small Workouts

I have some example scripts on this repository. Feel free to use them on your codes if needed.

Thanks 😊
    `,
    image: "/images/projects/workouts/small-workouts.jpg",
    date: "2024-09-15",
    github: "https://github.com/Sathish0225/codeExamples",
    liveUrl: "",
    featured: false,
  },
];
