import Header from "../../Component/header";


export default function manageMusic() {
  return (
    <>
      <Header />
      <div className="card-container-music p-4">
        <h1 className="text-center">Manage Music</h1>
        <form>
          <label className="me-3">Input Name</label>
          <input
            type="text"
            className="w-100"
            name="name"
          />
          <label className="me-3 mt-3">Input Album</label>
          <input
            type="text"
            className="w-100"
            name="price"
          />
          <label className="me-3 mt-3">Input Album Art</label>
          <input
            type="text"
            className="w-100"
            name="detail"
          />
          <label className="me-3 mt-3">Input Singer</label>
          <input
            type="text"
            className="w-100"
            name="location"
          />
          <label className="me-3 mt-3">Input Category</label>
          <input
            type="text"
            className="w-100"
            name="category"
          />
          <label className="me-3 mt-3">Input Publish Date</label>
          <input
            type="date"
            className="w-100"
            name="dateTimeShow"
          />
          <label className="me-3 mt-3">Input File</label>
          <input
            type="file"
            className="w-100"
            name="image"
          />

          <button type="submit" className="w-100 my-5 btn btn-primary">
            Save
          </button>
        </form>
      </div>
      <main className="container d-flex gap-3 my-5">
      </main>
    </>
  );
}
