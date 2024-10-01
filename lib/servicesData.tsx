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
    description: 'Load Planning & Dispatching Services',
    slug: 'load-planning-dispatching',
    content: `Efficient load planning and dispatching are crucial in keeping your freight operation running smooth and profitable. Ahead of the Rest Freight offers superior load planning services that maximize efficiency and reduce waste for any trucking company. 

    By effectively pre-scheduling routes and making sure your trucks are fully optimized, we help you avoid empty miles, reduce fuel consumption, and save you money in the process.

    Our team of veteran dispatchers is dedicated to monitoring data in real time to ensure timely and accurate load assignments. We create routes with traffic trends, current road conditions, and weather in mind to help your trucks avoid delays and deliver on time.<br><br>

    Whether you are into local hauls or cross-country shipments, we offer bespoke dispatching services tailored to your specific needs.

    With us handling load planning and dispatching for you, you will be able to focus more on growing your business while we take care of the logistics. We are committed to simplifying your operation, reducing operational costs, and increasing profitability.

    Our team is available 24/7 to handle any issues or adjustments that may arise, ensuring smooth communication with shippers, carriers, and brokers at all times.`
  },
  {
    image: '/assets/images/ratenegotiation.jpg',
    title: '02',
    description: 'Rate Negotiation',
    slug: 'rate-negotiation',
    content: `Securing the best rates for your loads is crucial in maintaining profitability in the competitive freight market. At Ahead of the Rest Freight, our skilled team of negotiators works around the clock to secure the best rates for your loads.

    With our wide network of brokers and shippers, we are in a prime position to secure favorable terms for your shipments. Whether you are an owner-operator looking to maximize your profits or manage a fleet, our rate negotiation services fit your specific needs.<br><br>

    We use market data and current industry trends to ensure your shipments are booked at the best possible rates. This helps you stay competitive while maximizing revenue.

    In addition to negotiating rates, we help secure fuel surcharges, accessorial charges, and other cost-related elements that impact profitability. We proactively monitor market trends and adjust rates accordingly, ensuring you remain ahead of the competition.`
  },
  {
    image: '/assets/images/document-management.jpg',
    title: '03',
    description: 'Compliance and Documentation Management',
    slug: 'compliance-document-management',
    content: `Compliance is essential in the highly regulated trucking industry. Ahead of the Rest Freight simplifies this complexity by offering comprehensive compliance and documentation management services.

    We handle everything from DOT regulations and FMCSA compliance to driver qualification files, HOS records, and vehicle maintenance documentation. Our services ensure your fleet meets all safety standards, keeping you on the road and out of trouble.<br><br>

    Our system tracks critical deadlines, such as permit renewals, insurance certifications, and hazmat endorsements, ensuring that you never miss a compliance date. We provide real-time updates and reports on the compliance status of your fleet.

    By managing your documentation needs, we reduce your administrative workload, enabling you to focus on core business functions. From organizing Bill of Lading forms to carrier packets and safety audits, our team ensures everything is filed correctly and efficiently.`
  },
  {
    image: '/assets/images/billing.jpg',
    title: '04',
    description: 'Invoice & Payment Processing',
    slug: 'invoice-payment-processing',
    content: `Timely and accurate payments are critical to keeping your operations running smoothly. Ahead of the Rest Freight offers comprehensive invoice and payment processing services to ensure on-time payments without the hassle of managing invoices yourself. We handle everything in the billing cycle, from preparing accurate invoices to processing payments.
    You wont have to worry about late payments, mislaid documents, or disputes with brokers and shippers.<br><br>

    Our automated systems minimize errors and expedite invoice processing. We also follow up on overdue payments and collect them for you, giving you peace of mind.

    We offer real-time reporting, giving you complete insight into outstanding payments, payment trends, and other financial details.`
  },
  {
    image: '/assets/images/safety-dot.jpg',
    title: '05',
    description: 'Route Optimization',
    slug: 'route-optimization',
    content: `Efficient routing maximizes fleet productivity and reduces operational costs. Ahead of the Rest Freight uses advanced technology to plan optimal routes, minimizing travel distances and avoiding delays.

    Our system considers real-time data on traffic, road conditions, and weather to ensure your drivers always take the best route. This reduces fuel costs, shortens delivery times, and minimizes wear and tear on your vehicles.<br><br>

    We consistently update and modify routes to avoid unexpected delays, such as road closures or heavy traffic, ensuring smooth and timely deliveries.`
  },
  {
    image: '/assets/images/company formation.jpg',
    title: '06',
    description: 'Carrier Management System (CMS)',
    slug: 'carrier-management-system',
    content: `Fleet management requires efficient systems and processes to ensure smooth operations. Ahead of the Rest Freight’s CMS covers fleet management, driver management, and load management in one user-friendly platform.

    Our CMS provides real-time insights into the location and performance of your fleet, enabling you to make informed decisions, reduce downtime, and improve efficiency.<br><br>

    The system also includes automated tools for managing everything from maintenance schedules to driver logs and route optimization, ensuring that every detail of your fleet's operation runs smoothly.`
  },
  {
    image: '/assets/images/IFTA.jpg',
    title: '07',
    description: 'TONU Assist',
    slug: 'tonu-assist',
    content: `Truck Order Not Used (TONU) can lead to lost revenue and wasted time. Ahead of the Rest Freight’s TONU Assist service helps mitigate these losses by negotiating compensation for unused trucks when cancellations occur.

    Whether it’s a last-minute cancellation by a shipper or a change in schedule, our TONU Assist ensures you are reimbursed for the time and resources spent, reducing the financial impact of these disruptions.`
  },
  {
    image: '/assets/images/factoring services.jpg',
    title: '08',
    description: 'Customizable Pricing Plans',
    slug: 'customizable-pricing-plans',
    content: `Every trucking business is unique, and Ahead of the Rest Freight recognizes that. We offer customizable pricing plans to fit the specific needs of your operation, whether you're an owner-operator or managing a large fleet.

    Our flexible pricing allows you to choose only the services that benefit your business, from dispatching and load planning to compliance management and invoice processing. We ensure maximum value while providing the highest level of service.`
  }
];

export default servicesData;
