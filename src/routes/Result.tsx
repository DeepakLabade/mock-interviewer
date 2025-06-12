import { useFeedbackContext } from '@/context/FeedbackContext';

const Result = () => {

  const { feedbackList, clearFeedbackList } = useFeedbackContext();
    

  return (
    <div>
      {feedbackList.length === 0 ? (
        <p>No feedback collected yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbackList.map((item, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
            >
              <p>
                <strong>Rating:</strong> {item.ratings}/10
              </p>
              <p>
                <strong>Feedback:</strong> {item.feedback}
              </p>
              <p>
                <strong>question:</strong> {item.question}
              </p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={clearFeedbackList}>Clear the feedbacks</button>
    </div>
  );
}

export default Result