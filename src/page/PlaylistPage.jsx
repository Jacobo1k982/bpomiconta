// src/pages/PlaylistPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistPage = () => {
    return (
        <div className="p-8 text-center pt-28">
            <h1 className="text-3xl font-bold text-white mb-6">Playlist de Videos</h1>
            <video src="/NoticiasDestacadas/videoplayback.mp4" controls className="w-full max-w-2xl mx-auto rounded-xl mb-6" />
            <Link to="/" className="text-teal-400 underline">← Volver</Link>
        </div>
    );
};

export default PlaylistPage;