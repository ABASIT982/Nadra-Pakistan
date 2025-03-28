import React from 'react'
import './TrackDocument.css'

export default function TrackDocument() {
  return (
    <>
    <div className="container">
        <h1>Document Tracker</h1>
        <br />
        <table>
            <thead>
                <tr>
                    <th>Document Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Document 1</td>
                    <td>2024-12-28</td>
                    <td>Approved</td>
                    <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Document 2</td>
                    <td>2024-12-20</td>
                    <td>Pending</td>
                    <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}
