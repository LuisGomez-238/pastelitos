function FillingSelector({ fillings, currentFilling, onChange }) {
  return (
    <div className="filling-selector">
      {fillings.map(filling => (
        <div
          key={filling.id}
          className={`filling-option ${currentFilling === filling.id ? 'active' : ''}`}
          onClick={() => onChange(filling.id)}
        >
          <div 
            className="filling-preview"
            style={{ '--filling-color': filling.color }}
          />
          <div className="filling-name">{filling.name}</div>
          <div className="filling-description">
            {getFillingDescription(filling.id)}
          </div>
        </div>
      ))}
    </div>
  );
}

function getFillingDescription(fillingId) {
  const descriptions = {
    'fresh-strawberries': 'Fresh sliced strawberries',
    'nutella': 'Creamy hazelnut chocolate spread',
    'cookies-cream': 'Whipped cream with cookie crumbles',
    // Add more descriptions...
  };
  return descriptions[fillingId] || '';
} 