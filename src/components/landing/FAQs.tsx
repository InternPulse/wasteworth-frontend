import DropDown from "./DropDown";

const FAQs = () => {
  return (
    <div className="bg-gray-100/70 p-5 space-y-2">
      {/* Header */}
      <div className="flex flex-col gap-2 bg-white  rounded-lg p-4">
        <h2 className="text-[#3B9561] font-semibold text-xl text-center">
          Do you have Questions?
        </h2>
        <p className="text-center text-gray-800">
          We have answers (well, most of the times)
        </p>
      </div>
      <p className="rounded-lg p-4 bg-white text-center font-medium text-gray-700">
        Below you'll find answers to the most common questions you may have on
        WasteWorth.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col px-2 py-4 bg-white rounded">
          <h2 className="text-[#3B9561] font-semibold w-9/10 mx-auto">
            Disposers
          </h2>
          <hr className="my-1 w-19/20 mx-auto text-gray-300" />
          {disposer.map((question, i) => (
            <DropDown question={question} key={i} />
          ))}
        </div>
        <div className="flex flex-col px-2 py-4 bg-white rounded">
          <h2 className="text-[#3B9561] font-semibold w-9/10 mx-auto">
            Recyclers
          </h2>
          <hr className="my-1 w-19/20 mx-auto text-gray-300" />
          {recycler.map((question, i) => (
            <DropDown question={question} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const disposer = [
{
question: "How do I post my waste?",
answer:" Open your dashboard → tap Post Waste → select type (Plastics for now), enter quantity, add pickup location, then publish."
},
{
question: "Do I have to pay to post my waste?",
answer: "No. Posting waste is completely free."
},
{
question: "Who will collect my waste?",
answer: "Verified Recyclers nearby will see your listing and contact you directly."
},
{
question: "Can I choose who picks up my waste?",
answer: "Yes. You decide which recycler to respond to and finalize with them."
},
{
 question: "How is payment handled?",
 answer: "WasteWorth does not handle payments. You and the recycler agree on terms outside the app."
},
{
  question: "What if no one picks up my waste?",
  answer: "Listings expire after a set time.You can repost easily from your dashboard."
 },
  {
    question: "Can I edit or delete a waste post?",
    answer: "Yes. Go to My Waste Waste, open your listing, then select Edit or Delete.",
  },
  {
    question: " What if I already gave the waste to someone?",
    answer: "Mark your listing as Collected so recyclers don’t keep contacting you.",
  },
  {
    question: "Are recyclers verified?",  
    answer: "Many recyclers have a verification badge, which means their documents were checked by our team.",
  },
  {
    question: "What should I do if I feel unsafe?",
    answer: "Always meet in public areas when possible. Use in-app messaging to keep a record. Report suspicious activity via the Report button.",
  },
];



const recycler = [
{  
question: "How do I find waste to collect?",
answer: "Open your dashboard and tap Browse Waste. You’ll see listings nearby."
},
{
question: "Do I pay to access listings?",
answer:" No. Browsing and contacting disposers is free."
},
{
question: "How do I contact a disposer?",
answer: "From the listing detail, tap Contact Disposer. You can call, WhatsApp, or use in-app chat."
},
{
question: "How do I make an offer?",
answer: "Tap Make Offer, suggest a price/quantity, and send. The disposer decides whether to accept."
},
{
question: "Does WasteWorth handle payments?",
answer: "No. Payments and negotiations happen directly between you and the disposer."
},
{
question: "How do I know if a disposer accepted my offer?",
answer: "You’ll see the status change in My Offers (Accepted, Rejected, Collected)."
},
{
question: "What happens after I collect waste?",
answer: "Mark the listing as Collected in your offers. This updates your impact stats and badges."
},
{
question: "Can I filter listings by type or location?",
answer: "Yes. Use the filter bar in the marketplace to set type, distance, and quantity."
},
{
question: "What if the waste isn’t as described?",
answer: "You can report the listing as inaccurate. Our admin team reviews flagged posts."
},
{
question: "How do I become a verified recycler?",
answer: "Submit your ID and proof of recycling operations in your profile. Once approved, you’ll get a verification badge."
}
]











 