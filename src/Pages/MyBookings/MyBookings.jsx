import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const MyBookings = () => {
  const location = useLocation();
  const bookedLawyer = location.state?.bookedLawyer;


  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);


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


  const handleCancel = (id) => {
    setAppointments(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('appointments', JSON.stringify(updated));
      return updated;
    });
    toast.error('Appointment cancelled successfully!');
  };


  const data = appointments.map(item => ({
    name: item.name,
    fee: parseInt(item.consulting_fee),
  }));


  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
      ${x + width}, ${y + height} Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  return (
    <div className="p-10">
      <Toaster position="top-right" />



      {appointments.length > 0 && (
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-25} textAnchor="end" interval={0} />
          <YAxis
            label={{
              value: "Consulting Fee (৳)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Bar
            dataKey="fee"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      )}

      {appointments.length === 0 && (
        <p className="text-gray-500">No appointments booked yet.</p>
      )}


      <div className="flex gap-8 mt-8">
        <div className="flex-1">
          {appointments.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2 text-center">My Today Appointments</h2>
              <p className='text-gray-500 text-center mb-10'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
              <ul className="space-y-3">
                {appointments.map(item => (
                  <li
                    key={item.id}
                    className="  p-2 rounded"
                  >
                    <div className='flex justify-between items-center'>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.expertise} | Fee: {item.consulting_fee}৳
                      </p>
                    </div>
                    <button
                      onClick={() => handleCancel(item.id)}
                      className="text-sm  text-red-600 border border-red-600 ml-20 mt-5 px-96 py-1 rounded-4xl hover:bg-red-100"
                    >
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;


