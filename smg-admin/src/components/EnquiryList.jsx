import React, { useState, useEffect } from "react";
import axios from "axios";

function EnquiryList({ onLogout, token }) {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, [token]);

  const fetchEnquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://smg-livid.vercel.app/enquiries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEnquiries(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      setError(error.message || "Failed to fetch enquiries.");
      setLoading(false);
      if (error.response && error.response.status === 403) {
        onLogout();
      }
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `https://smg-livid.vercel.app/update-enquiry-status/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchEnquiries();
    } catch (error) {
      console.error("Error updating status:", error);
      setError(error.message || "Failed to update status.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading enquiries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className=" px-4 md:px-8 lg:px-10 text-center">
      <header className=" py-4 flex justify-between">
        <h1 className=" tracking-wider text-lg md:text-2xl">
          <span className=" text-sky-500  ">Mayan</span>
          <span className="font-semibold">Glass</span>
        </h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>
      <h2 className="text-2xl font-semibold mb-4 text-sky-600">Enquiries</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Mobile</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Premises</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Message</th>
              <th className="border p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => {
              let rowColor = "";
              switch (enquiry.status) {
                case "pending":
                  rowColor = "bg-yellow-100";
                  break;
                case "connected":
                  rowColor = "bg-sky-100";
                  break;
                case "completed":
                  rowColor = "bg-teal-100";
                  break;
                case "rejected":
                  rowColor = "bg-red-100";
                  break;
                default:
                  rowColor = "";
              }
              return (
                <tr key={enquiry._id} className={`${rowColor} hover:bg-white`}>
                  <td className="border p-2">{enquiry.name}</td>
                  <td className="border p-2">
                    <a href={`tel:+91${enquiry.mobile}`}>{enquiry.mobile}</a>
                  </td>
                  <td className="border p-2">
                    <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                  </td>
                  <td className="border p-2">{enquiry.premises}</td>
                  <td className="border p-2">{enquiry.location}</td>
                  <td className="border p-2">{enquiry.message}</td>
                  <td className="border p-2">
                    <select
                      value={enquiry.status}
                      onChange={(e) =>
                        updateStatus(enquiry._id, e.target.value)
                      }
                      className="p-1 border rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="connected">Connected</option>
                      <option value="completed">Completed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnquiryList;
