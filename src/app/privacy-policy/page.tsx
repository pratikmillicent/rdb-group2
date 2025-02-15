import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <div  className="d-flex flex-column align-items-center text-center mb-5">
      {/* Header Section */}
      <Row className="w-100 text-white text-center" style={{ background: "#3a3a3d", padding: "80px 15px" }}>
        <Col>
          <h1 className="fw-bold">Privacy Policy & Terms of Use</h1>
          <p className="text-light">Last Updated: 14th February 2025</p>
        </Col>
      </Row>
      
      {/* Content Section */}
      <Container className="mt-5 px-4 px-md-5">
        <Row>
          <Col className="text-start">
            <h2 className="text-golden">1. Privacy Policy</h2>
            <h4>Introduction</h4>
            <p>
              This Privacy Policy explains how R.D.Brothers collects, uses, and secures your
              personal and work-related data when you use the App.
            </p>

            <h4>Data Collection</h4>
            <ul>
              <li><strong>Personal Information:</strong> Name, employee ID, email, phone number, and department details.</li>
              <li><strong>Usage Data:</strong> Login activities, app usage, and system logs.</li>
              <li><strong>User Collected Data:</strong> Leads, properties, and listings for internal CRM.</li>
            </ul>

            <h4>Purpose of Data Collection</h4>
            <ul>
              <li>Manage internal CRM functionalities.</li>
              <li>Enhance internal communications and workflows.</li>
              <li>Monitor and improve overall app performance.</li>
            </ul>

            <h4>Data Security</h4>
            <p>Standard security measures, such as encryption and restricted access, safeguard your data.</p>

            <h4>Data Sharing and Retention</h4>
            <ul>
              <li><strong>Internal Use:</strong> Data is used internally and not shared with external parties.</li>
              <li><strong>Retention:</strong> Data is retained as per company policy.</li>
            </ul>

            <h4>Employee Rights</h4>
            <p>Employees can access and update their personal information by contacting IT or HR.</p>

            <h2 className="text-golden mt-4">2. Terms and Conditions</h2>
            <h4>Acceptance and Scope</h4>
            <p>By using the App, you agree to these Terms & Conditions. The App is for R.D.Brothers employees only.</p>

            <h4>User Obligations</h4>
            <ul>
              <li><strong>Account Security:</strong> Keep login credentials confidential.</li>
              <li><strong>Appropriate Use:</strong> Use the App for work-related purposes only.</li>
              <li><strong>Accuracy of Information:</strong> Ensure all input data is accurate and timely.</li>
            </ul>

            <h4>Intellectual Property and Confidentiality</h4>
            <ul>
              <li><strong>Ownership:</strong> All content in the App belongs to R.D.Brothers.</li>
              <li><strong>Confidentiality:</strong> App data must not be disclosed outside the organization.</li>
            </ul>

            <h4>Disclaimers and Limitations</h4>
            <ul>
              <li><strong>Provided "As Is":</strong> The App has no guarantees of uninterrupted operation.</li>
              <li><strong>Liability:</strong> R.D.Brothers is not liable for damages arising from App usage.</li>
            </ul>

            <h4>Modifications</h4>
            <p>R.D.Brothers may update this policy at any time, with changes communicated internally.</p>

            <h4>Governing Law</h4>
            <p>This policy is governed by Indian law, with disputes subject to Indian courts.</p>

            <h2 className="text-golden mt-4">3. Contact Information</h2>
            <p><strong>IT Support / HR Department</strong></p>
            <p>Email: <a href="mailto:crm@rdbrothers.com">crm@rdbrothers.com</a> / <a href="mailto:Dhaval@rdbrothers.com">Dhaval@rdbrothers.com</a></p>
            <p>Phone: 7021360487 / 9819902226</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;