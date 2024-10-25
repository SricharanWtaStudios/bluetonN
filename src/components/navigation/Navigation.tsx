/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { NavigationItem } from './NavigationItem';
import { UserProfile } from './UserProfile';

const navigationItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34c9e8d56f4431d26c590e5de5eca5812dc1e8a399a3667fbe98cab275fdd2ff?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Home", href: "/home", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/016d6c7c4a6cb5abc05e1fa880ad217181b49c2e7313504a0bf99e5c06acb027?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Product", href: "/product" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7039c5b6c0198c94a9dba642f7824d9762bc4ae6850f7a286ddb0c212cc7b485?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Work Order", href: "/work-order" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0fb2d6aceff186b98bccc7aff7f626e9d3d32a80d38f532b5886d900563372f?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Genealogy", href: "/genealogy" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c6b4710c118cf7c13d0a4ef39ba309500f2214b59939fc9797184e616fe4878?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Schedule", href: "/schedule-batch" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e6c5fc6c0b38c5f14a4ea0d3b59c04806a311f72fa1ae0c74301d3546a4b3b6?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Factory", href: "/factory-dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e755bdb7545f42ba7fadba2a6d9782250612e2952affc6db5c626338f7e7cd7?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Machine", href: "/machine" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d11ff7c32ed0c1cf1d1b61f41d4d0b0e80d5d8dc4654299f824c4e3e8d86ab2?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "People", href: "/people-employees" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0586fea8a381adba802eb0948396cfc713d79af1820f47a3f2e97c82b01c2e2?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&", label: "Inventory", href: "/inventory-machine-parts" }
];

export const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col pt-5 bg-neutral-800 w-[104px]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7d75636e20722a113a141881c8d717e55d7564b92ab6dbe590b868e2c6dd865?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&" 
        alt="Company logo" 
        className="object-contain self-center aspect-[0.95] w-[52px]" 
      />
      <div className="flex overflow-hidden flex-col mt-3 text-xs leading-none text-center h-[760px] text-neutral-50">
        {navigationItems.map((item, index) => (
          <NavigationItem 
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
        <div className="flex py-2 mt-6 min-h-[4px]" />
      </div>
      <UserProfile 
        avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d84eb24f5a41909272937184e7469d341d90afbc3ef68e462a70b767e38870c1?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&"
        settingsIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a94468443646aff8061e5c163e3e7026b4557a8cf0b275ab7daa68966a5cfa55?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&"
      />
    </nav>
  );
};