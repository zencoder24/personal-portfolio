export default function exit(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/blogs" });
  res.end();
}
