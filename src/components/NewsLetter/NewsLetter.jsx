export default function NewsLetter() {
  return (
    <div className="flex flex-col place-items-center  p-4">
      <div className="space-y-6">
        <h2 className="lg:text-3xl text-2xl font-bold text-[#19150f]">
          Get all the latest news and info <br /> sent to your inbox.
        </h2>
        <input
          className="border px-6 py-2 border-[#b69d78] w-full"
          type="email"
          name="email"
          id=""
          placeholder="Email address"
        />
        <button className="flex items-center text-white hover:text-[#19150f] bg-[#b69d78] px-4 py-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}
