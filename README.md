# Notes App

A full-stack note application built using **React** and **Django**. This app allows users to create, edit, and delete notes with a fully responsive design and a RESTful API for managing data.

## Features

- Create, edit, and delete notes 📝
- RESTful API for full CRUD operations (built using Django Rest Framework)
- Frontend developed with **React** and **React Router** for smooth navigation
- Backend built with **Django** and **Django Rest Framework**
- Data stored using Django's built-in **SQLite** database
- Fully responsive design created with custom **CSS**
- CORS handling for seamless API requests
- Security implemented using **CSRF tokens**
- React Hooks and Django serializers for efficient state and data management

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Router**: For client-side routing
- **CSS**: Custom styles for responsiveness

### Backend
- **Django**: High-level Python web framework
- **Django Rest Framework (DRF)**: Toolkit for building Web APIs
- **SQLite**: Django's built-in database for data storage

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js** and **npm** (for frontend)
- **Python** and **pip** (for backend)
- **Git** for version control

### Backend (Django)

1. Clone the repository:
   ```bash
   git clone git@github.com:M0HAMEDHANY/Notes.git
   cd Notes

2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install Django and dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
## That is enough for starting the project the following steps are for those who want to edit the app with no need to run
   ```bash
   npm run build
   ```
## whenever change something

   ### Frontend (React)
   
   1. Navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
   
   2. Install dependencies:
      ```bash
      npm install
      ```
   
   3. Start the React development server:
      ```bash
      npm run dev
      ```
   
   4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Create, edit, and delete notes from the app's UI.
2. The data will be stored in the SQLite database through the Django backend.

## API Endpoints

- `GET /api/notes/`: Fetch all notes
- `GET /api/notes/:id/`: Fetch a specific note
- `POST /api/notes/`: Create a new note
- `PUT /api/notes/:id/`: Update an existing note
- `DELETE /api/notes/:id/`: Delete a note

## Screenshots

### Desktop view :
![image](https://github.com/user-attachments/assets/d7dfaae6-40e1-4281-b866-6c5119af627a)

### Tablet view :
![image](https://github.com/user-attachments/assets/b635c173-6aab-4c8e-8308-ed526cf60902)

### Phone view :
![image](https://github.com/user-attachments/assets/868ec7eb-4163-450a-853d-277d63670631)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request
