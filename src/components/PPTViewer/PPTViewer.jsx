import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const PPTViewer = ({url}) => {
  // Define the file(s) you want to display
  const docs = [
    {
      uri: {url}, // File URL from public folder
      fileType: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // MIME type for PPTX
    },
  ];

  return (
    <div style={{ height: "600px" }}>
      <h2>PowerPoint Presentation Viewer</h2>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
      />
    </div>
  );
};

export default PPTViewer;