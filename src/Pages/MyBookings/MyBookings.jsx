import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const MyBookings = () => {
  const location = useLocation();
  const bookedLawyer = location.state?.bookedLawyer;

  // Initial appointments from localStorage
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Add new bookedLawyer if not exists
  useEffect(() => {
    if (bookedLawyer) {
      setAppointments(prev => {
        const exists = prev.find(item => item.id === bookedLawyer.id);
        if (exists) {
          toast(`You already booked ${bookedLawyer.name}`);
          return prev;
        }
        toast.success(`Appointment booked with ${bookedLawyer.name}`);
        return [
          ...prev,
          {
            id: bookedLawyer.id,
            name: bookedLawyer.name,
            expertise: bookedLawyer.expertise,
            consulting_fee: bookedLawyer.consulting_fee
          }
        ];
      });
    }
  }, [bookedLawyer]);

  // Cancel appointment
  const handleCancel = (id) => {
    setAppointments(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('appointments', JSON.stringify(updated)); // <-- ensure update
      return updated;
    });
    toast.error('Appointment cancelled successfully!');
  };

  // Chart data
  const data = [
    { name: 'Booked', value: appointments.length },
    { name: 'Available', value: Math.max(15 - appointments.length, 0) }
  ];
  const COLORS = ['#4CAF50', '#FF9800'];

  return (
    <div className="p-10">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>

      {appointments.length === 0 && (
        <p className="text-gray-500">No appointments booked yet.</p>
      )}

      <div className="flex gap-8">
        {/* Appointment list */}
        <div className="flex-1">
          {appointments.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Appointment List</h2>
              <ul className="space-y-3">
                {appointments.map(item => (
                  <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.expertise} | Fee: {item.consulting_fee}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCancel(item.id)}
                      className="text-sm text-red-600 border border-red-600 px-2 py-1 rounded hover:bg-red-100"
                    >
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Chart */}
        <div className="flex-1 flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
