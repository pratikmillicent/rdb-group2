import { useEffect, useState } from "react";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import { resume_submision } from "@/app/actions";
import { Alert } from "react-bootstrap";

// const initial = {
//   name: "",
//   email: "",
//   resume: null,
//   coverLetter: "",
//   position: title,
// };

interface ResumeUploadProps {
  id: number;
  careerData: any;
}

const ResumeUpload = ({ id, careerData }: ResumeUploadProps) => {
  const [status, setStatus] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState<string | undefined>(careerData[id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
    position: title,
  });

  useEffect(() => {
    const t = setTimeout(() => {
      setStatus(undefined);
    }, 5000);

    return () => clearTimeout(t);
  }, [status]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setFormData(prevState => ({
      ...prevState,
      resume: file,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    formData.resume && form.append("resume", formData.resume);
    form.append("coverLetter", formData.coverLetter);
    form.append("position", title || "");

    setLoading(true);
    const resp = await resume_submision(form);
    setLoading(false);

    if (resp.success) {
      setFormData({
        name: "",
        email: "",
        resume: null,
        coverLetter: "",
        position: title,
      });
      setStatus("success");
    } else {
      setStatus("danger");
    }
  };

  return (
    <>
      {status && (
        <Alert
          style={{
            width: "fit-content",
            position: "fixed",
            right: 30,
            bottom: 30,
            zIndex: 1000000,
          }}
          variant={status}
          onClose={() => setStatus(undefined)}
          dismissible
        >
          <Alert.Heading>
            {status === "success"
              ? "Thank You, For Reaching Out"
              : "System Error"}
          </Alert.Heading>
          <hr />
          <p>
            {status === "success"
              ? "We will contact you soon."
              : "Please try again."}
          </p>

          <div
            className="timer"
            style={{
              background: "currentColor",
              height: "3px",
              marginTop: 10,
            }}
          ></div>
        </Alert>
      )}

      <Heading headTitle="Submit Your Resume" />

      <div className="container mt-60">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-start">
            <p className="fz-16 fw-400">
              Can't find a position that fits your profile? Submit your resume,
              and we will keep you in mind for opportunities in the future.
            </p>

            <Image
              src="/assets/images3/careers/resume-img.webp"
              alt="Resume Illustration"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
              width={800}
              height={500}
            />
          </div>
          <div className="col-lg-6">
            <section className="contact-crev mt-30">
              <div className="p-0 px-md-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="full-width border-0">
                      <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages"></div>
                        <div className="controls row">
                          <div className="col-lg-6">
                            <label htmlFor="form_name fz-16 fw-400">Name</label>
                            <div className="form-group mb-30 mt-5">
                              <input
                                style={{ background: "var(--white)" }}
                                id="form_name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="form_email fz-16 fw-400">
                              Email
                            </label>
                            <div className="form-group mb-30 mt-5">
                              <input
                                style={{ background: "var(--white)" }}
                                id="form_email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="form_positon fz-16 fw-400">
                              Postion
                            </label>
                            <div className="form-group mb-30 mt-5">
                              <select
                                id={"" + id}
                                name="position"
                                style={{
                                  width: "100%",
                                  border: " 1px solid rgba(0, 0, 0, 0.2)",
                                  borderRadius: "10px",
                                  background: "transparent",
                                  padding: " 15px",
                                  transition: "all 0.4s",
                                }}
                                value={careerData[id].title}
                                onChange={e => setTitle(e.target.value)}
                              >
                                {careerData.map((item: any) => (
                                  <option key={item.id} value={item.title}>
                                    {item.title}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="form_resume fz-16 fw-400">
                              Resume
                            </label>
                            <div className="form-group mb-30 mt-5">
                              <input
                                style={{ background: "var(--white)" }}
                                id="form_resume"
                                type="file"
                                accept="application/pdf"
                                name="resume"
                                onChange={handleFileChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="form_coverLetter fz-16 fw-400">
                              Cover Letter
                            </label>
                            <div className="form-group mt-5">
                              <textarea
                                style={{ background: "var(--white)" }}
                                id="form_coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                placeholder="Cover Letter"
                                required
                              />
                            </div>
                            <div className="mt-30 mb-20">
                              <button
                                type="submit"
                                className="butn butn-md butn-bord radius-30 fz-16 fw-400"
                              >
                                {loading ? (
                                  <div className="loader"></div>
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeUpload;
