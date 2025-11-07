import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [appointments, setAppointments] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    bname: "",
    bemail: "",
    bphone: "",
    bcheckin: "",
    bcheckout: "",
   


  });

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:8000/appoiments");
      setAppointments(res.data);
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (id) => {
    const selected = appointments.find((item) => item.id === id);
    setEditId(id);
    setFormData(selected);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8000/appoiments/${id}`, formData);
      alert("✅ Appointment Updated!");
      setEditId(null);
      fetchAppointments();
    } catch (error) {
      console.error("❌ Error updating:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/appoiments/${id}`);
      alert("🗑️ Appointment Deleted!");
      fetchAppointments();
    } catch (error) {
      console.error("❌ Error deleting:", error);
    }
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Appointment Details
      </h2>

      {/* 💻 Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Check-in</th>
              <th className="p-3 border">Check-out</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-100">
                  <td className="border p-2">
                    {editId === item.id ? (
                      <input
                        type="text"
                        name="bname"
                        value={formData.bname}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      item.bname
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === item.id ? (
                      <input
                        type="email"
                        name="bemail"
                        value={formData.bemail}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      item.bemail
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === item.id ? (
                      <input
                        type="text"
                        name="bphone"
                        value={formData.bphone}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      item.bphone
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === item.id ? (
                      <input
                        type="date"
                        name="bcheckin"
                        value={formData.bcheckin}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      item.bcheckin
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === item.id ? (
                      <input
                        type="date"
                        name="bcheckout"
                        value={formData.bcheckout}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      item.bcheckout
                    )}
                  </td>
                  <td className="border p-2 space-x-2">
                    {editId === item.id ? (
                      <button
                        onClick={() => handleUpdate(item.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-yellow-400 px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4 text-gray-500 italic"
                >
                  No Appointments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Card Layout */}
      <div className="grid md:hidden gap-4">
        {appointments.length > 0 ? (
          appointments.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md border border-gray-300 rounded-lg p-4"
            >
              {editId === item.id ? (
                <>
                  <input
                    type="text"
                    name="bname"
                    value={formData.bname}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2 rounded"
                  />
                  <input
                    type="email"
                    name="bemail"
                    value={formData.bemail}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2 rounded"
                  />
                  <input
                    type="text"
                    name="bphone"
                    value={formData.bphone}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2 rounded"
                  />
                  <input
                    type="date"
                    name="bcheckin"
                    value={formData.bcheckin}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2 rounded"
                  />
                  <input
                    type="date"
                    name="bcheckout"
                    value={formData.bcheckout}
                    onChange={handleChange}
                    className="border p-1 w-full mb-2 rounded"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleUpdate(item.id)}
                      className="bg-green-600 text-white flex-1 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-400 text-white flex-1 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-semibold text-blue-600">
                    {item.bname}
                  </p>
                  <p className="text-sm text-gray-700">{item.bemail}</p>
                  <p className="text-sm text-gray-700">{item.bphone}</p>
                  <p className="text-sm text-gray-700">
                    Check-in: {item.bcheckin}
                  </p>
                  <p className="text-sm text-gray-700">
                    Check-out: {item.bcheckout}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-yellow-400 flex-1 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white flex-1 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">
            No Appointments Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Table;
