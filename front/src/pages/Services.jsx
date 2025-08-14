import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/serviceCard/ServiceCard';
import './branding.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/services/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Загрузка...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Ошибка: {error}</p>;

  return (
  <div
  id="services"
  style={{ scrollMarginTop: '100px' }}
  className="services-section max-w-4xl mx-auto px-4 py-10"
>
  <h1 className="text-3xl font-bold mb-8 text-center text-gray-100 tracking-tight">
  Наши услуги
</h1>

<div className="service-grid">
  {services.map(service => (
    <ServiceCard key={service.id} name={service.name} />
  ))}
</div>
</div>

  );
};

export default Services;
