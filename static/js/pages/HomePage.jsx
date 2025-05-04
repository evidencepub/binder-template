import { LinkGenerator } from "../components/LinkGenerator.jsx";
import { BuilderLauncher } from "../components/BuilderLauncher.jsx";
import { HowItWorks } from "../components/HowItWorks.jsx";
import { useEffect, useState } from "react";
import { FaviconUpdater } from "../components/FaviconUpdater.jsx";
import { Spec, LaunchSpec } from "../spec.js";

/**
 * @typedef {object} HomePageProps
 * @prop {import("../App.jsx").Provider[]} providers
 * @prop {URL} publicBaseUrl
 * @prop {URL} baseUrl
 * @param {HomePageProps} props
 */
export function HomePage({ providers, publicBaseUrl, baseUrl }) {
  const defaultProvider = providers[0];
  const [selectedProvider, setSelectedProvider] = useState(defaultProvider);
  const [repo, setRepo] = useState("");
  const [ref, setRef] = useState("");
  const [urlPath, setUrlPath] = useState("");
  const [isLaunching, setIsLaunching] = useState(false);
  const [spec, setSpec] = useState("");
  const [progressState, setProgressState] = useState(null);

  useEffect(() => {
    const encodedRepo = selectedProvider.repo.urlEncode
      ? encodeURIComponent(repo)
      : repo;
    let actualRef = "";
    if (selectedProvider.ref.enabled) {
      actualRef = ref !== "" ? ref : selectedProvider.ref.default;
    }
    setSpec(
      new Spec(
        `${selectedProvider.id}/${encodedRepo}/${actualRef}`,
        new LaunchSpec(urlPath),
      ),
    );
  }, [selectedProvider, repo, ref, urlPath]);

  return (
    <>
      <div className="text-center col-10 mx-auto">
        <h5> This Binder is reserved for published Evidence Living Preprints.</h5>
        <p style={{ fontSize: "1.5em" }}>
           🫙🌱
        </p>
        <p style={{ fontSize: "1.5em" }}>
          Visit <a href="https://terrarium.evidencepub.io">terrarium</a> if you'd like to create a runtime for your next-gen preprint!
        </p>
        <p className="fw-lighter mt-8">
          🧩 New to living preprints? Quick start with a{" "}
          <a
            href="https://evidencepub.io/templates"
            target="_blank"
            rel="noreferrer"
          >
            repository template!
          </a>{" "}
        </p>
      </div>
      <LinkGenerator
        className="bg-custom-dark p-4 pb-0 rounded-top"
        publicBaseUrl={publicBaseUrl}
        providers={[providers[0]]}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        repo={repo}
        setRepo={setRepo}
        reference={ref}
        setReference={setRef}
        urlPath={urlPath}
        setUrlPath={setUrlPath}
        isLaunching={isLaunching}
        setIsLaunching={setIsLaunching}
      />
      <BuilderLauncher
        className="bg-custom-dark p-4 pt-2 rounded-bottom"
        baseUrl={baseUrl}
        spec={spec}
        isLaunching={isLaunching}
        setIsLaunching={setIsLaunching}
        progressState={progressState}
        setProgressState={setProgressState}
      />
      <FaviconUpdater progressState={progressState} />
      <HowItWorks />
    </>
  );
}
