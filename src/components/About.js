import React from 'react';

function About() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Hakkında</h2>
        <div className="text-center">
          <h3>Görkem Ercan</h3>
          <p className="text-muted">Hacettepe Üniversitesinde Öğrenci</p>
          
          <div className="mt-4">
            <h4>Proje Hakkında</h4>
            <p>
              Bu uygulama, WeatherStack.com API'si kullanılarak geliştirilmiş bir hava durumu
              uygulamasıdır. React ve Bootstrap kullanılarak
              oluşturulmuştur.
            </p>
          </div>
          
          <div className="mt-4">
            <h4>İletişim</h4>
            <p>
              <a href="mailto:gorkemercan@hacettepe.edu.tr" className="text-decoration-none">
                <i className="bi bi-envelope-fill me-2"></i>
                gorkemercan@hacettepe.edu.tr
                </a>
            </p>
            <p>
              <a href="https://github.com/grkmercan" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github me-2"></i>
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;