


const renderBillingType = () => {
    switch (billingType) {
      case false:
        return {
          planPrice: {
            price1: "$90/yr",
            price2: "$120/yr",
            price3: "$150/yr",
          },
        };
      case true:
        return {
          planPrice: {
            price1: "$9/yr",
            price2: "$12/yr",
            price3: "$15/yr",
          },
        };
      default:
        break;
    }
  };