export function HowItWorks() {
  return (
    <div>
      <h2 className="text-center mt-4">Submission-ready living preprints in 4 steps</h2>

      <div className="row my-4">
        <div className="col-md-1 offset-md-2">
          <span
            className="circle-point"
            style={{
              color: "rgb(247, 144, 42)",
              borderColor: "rgb(247, 144, 42)",
            }}
          >
            1
          </span>
        </div>
        <div className="col-md-8">
          <h4>💽 Data dependencies (optional)</h4>
          <p>If your executable content requires data to generate outputs, Evidence expects a <code>data_requirement.json</code> file under the <code>📁 binder</code> directory of your repository to download and link it to your reproducible preprint environment.</p>
          <p>Once ready, please make <a target="_blank" href="https://github.com/neurolibre/info/issues/new/choose">a data download request</a> for us to approve hosting your data! If your preprint does not require data, you can skip this step.</p>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-1 offset-md-2">
          <span
            className="circle-point"
            style={{
              color: "rgb(204, 67, 101)",
              borderColor: "rgb(204, 67, 101)",
            }}
          >
            2
          </span>
        </div>
        <div className="col-md-8">
          <h4>🐳 Code dependencies</h4>
          <p>✨Your living preprint typically needs a Docker image (unless executable content is not included), but you don't need to build it yourself!</p>
          <p>Simply add <a target="_blank" href="https://repo2docker.readthedocs.io/en/latest/specification.html">REES</a> compatible dependency files, such as <code>requirements.txt</code> or <code>environment.yml</code> (for 🐍), in the repository's <code>📁 binder</code> directory and we will use them to build a Docker image for you.</p>
          <p>Check out <a target="_blank" href="http://mybinder.readthedocs.io/en/latest/using.html#preparing-a-repository-for-binder">reference documentation</a> for complete list of configuration files for different languages (<code>R</code>, <code>Julia</code>, <code>Octave</code> and more).</p>
          <p>This service will check the latest commit (<code>HEAD</code>) of your repository on the main branch to decide whether a new image needs to be built.</p>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-1 offset-md-2">
          <span
            className="circle-point"
            style={{
              color: "rgb(41, 124, 184)",
              borderColor: "rgb(41, 124, 184)",
            }}
          >
            3
          </span>
        </div>
        <div className="col-md-8">
          <h4>🚀 A successful build</h4> 
          <p>Click launch to trigger a build of your reproducible runtime.</p>
          <p>If the build is successful, you will be redirected to a Jupyter Lab environment, where you can interact with your notebooks and see if all the dependencies are working.</p>
          <p>This service will check the latest commit (<code>HEAD</code>) of your repository on the main branch to decide whether a new image needs to be built. If your dependencies will not change after your latest successful build, you can proceed to building your living preprint!</p>
          <p>You can visit <a href="https://runtimes.conp.cloud" target="_blank">our runtime gallery</a> to see the images we have built for you.</p>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-1 offset-md-2">
          <span
            className="circle-point"
            style={{
              color: "#394459",
              borderColor: "#394459",
            }}
          >
            4
          </span>
        </div>
        <div className="col-md-8">
          <h4>🌺 Build your living preprint!</h4> 
          <p>We have created a living preprint builder for you: <a href="https://robo.neurolibre.org" target="_blank">robo.neurolibre.org</a></p>
          <p>If you went through the previous steps successfully, you can submit your living preprint preview build requests to this service.</p>
          <p>Note that the builder expects a repository that is prepared to build a MyST-formatted content (<a href="https://mystmd.org/guide" target="_blank">reference documentation</a>).</p>
          <p>Visit our <a href="https://evidencepub.io/templates" target="_blank">template repository gallery</a> to quick start with a a layout that works for your content!</p>
        </div>
      </div>
    </div>
  );
}
