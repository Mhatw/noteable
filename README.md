# MyNote App

Welcome to MyNote, a web application for creating and managing notes. This project leverages [Supabase](https://supabase.io/) as the backend to handle data storage and retrieval. Users can log in seamlessly using Magic Link authentication or their GitHub accounts.

## Features

- Create and manage notes with a user-friendly interface.
- Backed by Supabase for secure and scalable data storage.
- Multiple authentication options:
  - **Magic Link:** Swift and secure login via email (please note: the free Supabase plan may have limits on Magic Link usage).
  - **GitHub:** Login using your GitHub account.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (the project uses Yarn)
- [Supabase Account](https://app.supabase.io/)

### Installation

1. Clone the repository:

```bash
     git clone https://github.com/your-username/mynote-app.git
```

2. Navigate to the project directory:

```bash
  cd noteable
```

3. Install dependencies using Yarn:

```bash
  node --version
```


### Configuration
Create a Supabase project and obtain your API key.

Copy the .env.example file to .env:

```bash
  cp .env.example .env
```

Update the .env file with your Supabase project details.

### Running the App

```bash
  yarn dev
```

### Authentication

#### Magic Link

Click on the "Login with Magic Link" button.
Enter your email address.

Check your email for the Magic Link and click to log in.

Please note: The free Supabase plan may have usage limits on Magic Link authentication.

#### GitHub

Click on the "Login with GitHub" button.

Authorize the application on the GitHub login page.