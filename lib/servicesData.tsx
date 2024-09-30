export interface Service {
    image: string;
    title: string;
    description: string;
    slug: string;
    content: string;
  }


const servicesData: Service[] = [
    {
      image: '/assets/images/dry-van.jpg',
      title: '01',
      description: 'Truck Dispatching',
      slug: 'truck-dispatching',
      content: 'Here is the detailed content for Truck Dispatching. This service helps manage...'
    },
    {
      image: '/assets/images/billing.jpg',
      title: '02',
      description: 'Billing',
      slug: 'billing',
      content: 'Billing services include invoicing, accounts receivable, and more to help...'
    },
    {
      image: '/assets/images/document-management.jpg',
      title: '03',
      description: 'Document Management & Paperwork',
      slug: 'document-management',
      content: 'Document Management ensures all your paperwork is handled efficiently...'
    },
    {
      image: '/assets/images/factoring services.jpg',
      title: '04',
      description: 'Factoring Services',
      slug: 'factoring-services',
      content: 'Factoring services allow you to convert unpaid invoices into cash...'
    },
    {
      image: '/assets/images/ratenegotiation.jpg',
      title: '05',
      description: 'Rate Negotiation',
      slug: 'rate-negotiation',
      content: 'Our team will negotiate the best rates for your trucking needs...'
    },
    {
      image: '/assets/images/safety-dot.jpg',
      title: '06',
      description: 'Safety/Dot Compliance',
      slug: 'safety-dot-compliance',
      content: 'Stay compliant with DOT regulations with our safety services...'
    },
    {
      image: '/assets/images/IFTA.jpg',
      title: '07',
      description: 'IFTA',
      slug: 'ifta',
      content: 'International Fuel Tax Agreement (IFTA) services to manage fuel taxes...'
    },
    {
      image: '/assets/images/company formation.jpg',
      title: '08',
      description: 'Company Formation',
      slug: 'company-formation',
      content: 'Start your business with our complete company formation services...'
    },
  ]
  
  export default servicesData
  