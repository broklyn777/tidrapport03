import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react';

function Index() {
  // Hantera tillstånd för formulärdata med useState hooken
  const [formData, setFormData] = useState({
    username: '',
    projectInfo: '',
    date: '',
    time: '',
    hours: '',
  });

  // Hantera ändringar i formulärfält med en onChange funktion
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Skicka formulärdata till backenden med en submit funktion
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/timereports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Töm formulärfälten när tidrapporten har skickats till backenden
        setFormData({
          username: '',
          projectInfo: '',
          date: '',
          time: '',
          hours: '',
        });
      } else {
        console.log('Fel vid skickande av tidrapport');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Lägg till en tidrapport
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Användarnamn
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Projektinformation
              </label>
              <div className="mt-1">
                <input
                  id="projectInfo"
                  name="projectInfo"
                  type="text"
                  required
                  value={formData.projectInfo}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Datum
              </label>
              <div className="mt-1">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Tidpunkt
              </label>
              <div className="mt-1">
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hours"
                className="block text-sm font-medium text-gray-700"
              >
                Antal arbetade timmar
              </label>
              <div className="mt-1">
                <input
                  id="hours"
                  name="hours"
                  type="number"
                  required
                  value={formData.hours}
                  onChange={handleInputChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Skicka tidrapport
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
