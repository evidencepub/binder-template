import { useEffect, useState } from "react";
import "./LoadingIndicator.css";
import { PROGRESS_STATES } from "./Progress.jsx";
/**
 * List of help messages we will cycle through randomly in the loading page
 */
const HELP_MESSAGES = [
  'New to Evidence? Check out the <a target="_blank" href="https://docs.neurolibre.org">our Documentation</a> for more information.',
  'You can see a list of <a target="_blank" href="https://evidencepub.io/templates">templates</a> for your next-gen preprint.',
  'You can learn more about building your reproducible runtimes in <a target="_blank" href="https://docs.mybinder.org">the Binder community documentation</a>.',
  'Take a look at the <a target="_blank" href="https://repo2docker.readthedocs.io/en/latest/config_files.html">full list of configuration files supported by repo2docker.</a>',
  'For runtimes, take a look at the <a target="_blank" href="https://github.com/binder-examples/">gallery of example Binder repositories</a>.',
  "If a preprint takes a long time to launch, it is usually because the docker image is being pulled into the node your session will run on.",
  "Empty log? Notebook not loading? Maybe your ad blocker is interfering. Consider adding this site to the list of trusted sources.",
];

/**
 * @typedef {object} LoadingIndicatorProps
 * @prop {PROGRESS_STATES} progressState
 * @param {LoadingIndicatorProps} props
 */
export function LoadingIndicator({ progressState }) {
  const [currentMessage, setCurrentMessage] = useState(HELP_MESSAGES[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage =
        HELP_MESSAGES[Math.floor(Math.random() * HELP_MESSAGES.length)];
      setCurrentMessage(newMessage);
    }, 6 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center p-4 m-4">
      <div
        id="loader"
        className={progressState === PROGRESS_STATES.FAILED ? "error" : ""}
      ></div>
      {progressState === PROGRESS_STATES.FAILED ? (
        <h4>
          Launching your Binder failed! See the logs below for more information.
        </h4>
      ) : (
        <>
          <h4>Launching your Evidence Living Preprint's reproducible runtime environment...</h4>
          <h4>💽+📑+❤️=🌱</h4>
          <div>
            <p dangerouslySetInnerHTML={{ __html: currentMessage }}></p>
          </div>
        </>
      )}
    </div>
  );
}
