const sustainabilityTips = {
  "energy": [
    "Switch off lights and electrical appliances when not using them. Switch off power points to save energy when appliances are on standby.",
    "Switch to energy-saving LED light globes to save up to 80% on lighting costs.",
    "Shut doors and close curtains to only cool or heat the rooms you're using.",
    "Wash clothes in cold water and hang them to dry instead of using a dryer.",
    "Understand and improve your home's energy use with an energy assessment.",
    "Save energy in the kitchen by setting the fridge to the ideal temperature and using efficient cooking methods.",
    "Manage heating and cooling by setting the thermostat efficiently and closing off unused rooms.",
    "Compare energy deals to save on energy costs.",
    "Insulate your roof to save up to 20% on cooling and heating costs.",
    "Use solar energy to reduce dependency on grid electricity."
  ],
  "water": [
    "Check faucets, pipes, and toilets for leaks regularly and repair them immediately.",
    "Install low-flow showerheads, faucets, and dual-flush toilets to reduce water usage.",
    "Turn off taps when brushing your teeth, shaving, or washing dishes.",
    "Water plants early in the morning or late in the evening to minimize evaporation.",
    "Install rainwater tanks to collect water for gardening or cleaning.",
    "Choose native plants that require less water and maintenance.",
    "Run the washing machine only with full loads and adjust settings to match the load size.",
    "Use a bowl of water to wash fruits and vegetables instead of running water.",
    "Set up rain barrels to harvest rainwater for outdoor use.",
    "Educate others about water conservation and support community efforts."
  ],
  "Home": [
    "Replace old appliances with energy-efficient models to reduce electricity use.",
    "Install LED light bulbs to consume up to 80% less energy.",
    "Enhance natural light and ventilation to reduce dependency on artificial lighting and air conditioning.",
    "Adopt water-saving practices such as using low-flow fixtures and collecting rainwater.",
    "Insulate your home with eco-friendly materials to reduce heating and cooling needs.",
    "Install solar panels and consider renewable energy sources.",
    "Use sustainable building materials like bamboo, cork, or reclaimed wood.",
    "Create a green outdoor space with native plants and organic compost.",
    "Reduce waste by recycling, composting, and upcycling items.",
    "Incorporate smart home technology like thermostats and power strips to save energy."
  ],
  "Transportation": [
    "Walk or cycle for short distances to reduce fuel consumption and promote health.",
    "Use public transport to lower carbon emissions and reduce traffic congestion.",
    "Carpool or share rides to reduce the number of vehicles on the road.",
    "Drive fuel-efficient vehicles or hybrid models to save fuel.",
    "Switch to electric vehicles (EVs) for zero tailpipe emissions.",
    "Plan trips effectively to minimize fuel use and combine errands into one trip.",
    "Adopt eco-driving habits such as maintaining a steady speed and avoiding sudden braking.",
    "Choose trains or buses over flights for short distances to reduce fuel use.",
    "Invest in green fuel alternatives like biofuels or compressed natural gas (CNG).",
    "Promote shared mobility services like bike-sharing and e-scooters to reduce vehicle ownership."
  ]
};




document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const tipDisplay = document.getElementById('tip-display');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Get the interest and generate the tip
      const interest = card.getAttribute('data-interest');
      generateTip(interest);
    });
  });

  function generateTip(interest) {
    let tips;
    switch (interest) {
      case 'energy':
        tips = sustainabilityTips.energy;
        break;
      case 'water':
        tips = sustainabilityTips.water;
        break;
      case 'home':
        tips = sustainabilityTips.Home;
        break;
      case 'transportation':
        tips = sustainabilityTips.Transportation;
        break;
      default:
        tipDisplay.textContent = 'Select a valid category to get a tip!';
        return;
    }

    // Pick a random tip from the selected category
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];

    // Update the tip display area
    tipDisplay.textContent = tip;
  }
});
