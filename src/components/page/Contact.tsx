import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact: "",
    inquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(
        "https://sface.app/v1/mailer/send",
        formData
      );
      if (response.data.success) {
        setSubmitted(true);
      } else {
        throw new Error(response.data.message || "Failed to send the email.");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Us</h2>
      {submitted ? (
        <div className="success-message">
          Thank you for your inquiry! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              성함:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              연락처:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry" className="form-label">
              문의 내용:
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              rows={5}
              className="form-textarea"
            ></textarea>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="data-deletion-info">
            <h3>데이터 삭제 요청 안내</h3>
            <p className="developer-info">
              <strong>개발자/앱 이름:</strong> SFace
            </p>

            <p className="deletion-steps">
              <strong>데이터 삭제 요청 방법:</strong>
              <ul>
                <li>
                  위 양식에서 문의 내용에 "데이터 삭제 요청"이라고 명시해 주세요
                </li>
                <li>계정 이메일과 사용자 ID를 반드시 포함해 주세요</li>
                <li>삭제를 원하는 특정 데이터 유형을 명시해 주세요</li>
              </ul>
            </p>

            <p className="data-info">
              <strong>데이터 처리 정보:</strong>
              <ul>
                <li>
                  삭제되는 데이터: 사용자 프로필, 콘텐츠, 활동 기록, 기기 정보
                </li>
                <li>
                  보관되는 데이터: 법적 요구사항에 따른 거래 기록 (최대 1년간
                  보관)
                </li>
                <li>데이터 삭제 요청은 접수 후 14일 이내에 처리됩니다</li>
              </ul>
            </p>

            <p className="additional-info">
              사용자 계정 삭제 요청시 문의 메일을 보내주셔야합니다.
            </p>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
