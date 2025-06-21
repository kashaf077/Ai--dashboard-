export default function Uploads() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl mb-4">📦 Today’s Upload Pack</h2>
      <ul className="space-y-3">
        <li><a href="https://yourlink.com/reels.zip" target="_blank" className="text-blue-600 underline">📽️ Reels Pack</a></li>
        <li><a href="https://yourlink.com/captions.txt" target="_blank" className="text-blue-600 underline">📝 Captions</a></li>
        <li><a href="https://yourlink.com/hashtags.txt" target="_blank" className="text-blue-600 underline">🏷️ Hashtags</a></li>
        <li><a href="https://yourlink.com/thumbnails.zip" target="_blank" className="text-blue-600 underline">📸 Thumbnails</a></li>
      </ul>
    </div>
  );
}