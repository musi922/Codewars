function calculateScrap(scraps, numberOfRobots) {
    const efficiencies = scraps.map(scrap => BigInt(1000 - scrap * 10));
    const totalEfficiency = efficiencies.reduce((acc, efficiency) => acc * efficiency, BigInt(1000 ** scraps.length));
        const ironNeeded = (BigInt(numberOfRobots) * BigInt(50) * BigInt(1000 ** scraps.length) + totalEfficiency - BigInt(1)) / totalEfficiency;
    
    return Number(ironNeeded);
  }