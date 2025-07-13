'use client';

import { useAuth } from '@/hooks/useAuth';
import AdminLogin from '@/components/AdminLogin';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function Admin() {
  const { isAdmin, loading } = useAuth();
  const [heroContent, setHeroContent] = useState({
    title: "The Events Edit",
    subtitle: "Creating Extraordinary Moments",
    description: "Transform your special occasions into unforgettable experiences with our professional event planning and design services."
  });

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Wedding Planning",
      description: "Complete wedding planning and coordination services",
      price: "Starting at $3,500"
    },
    {
      id: 2,
      title: "Corporate Events",
      description: "Professional corporate event planning and management",
      price: "Starting at $2,000"
    }
  ]);

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    price: ''
  });

  const handleHeroUpdate = () => {
    alert('Hero content updated successfully!');
  };

  const handleAddService = () => {
    if (newService.title && newService.description && newService.price) {
      setServices([...services, { ...newService, id: Date.now() }]);
      setNewService({ title: '', description: '', price: '' });
      alert('Service added successfully!');
    }
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
    alert('Service deleted successfully!');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your website content and settings</p>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section Content</CardTitle>
                <p className="text-gray-600">Update the main hero section on your homepage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-title">Main Title</Label>
                  <Input
                    id="hero-title"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Input
                    id="hero-subtitle"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-description">Description</Label>
                  <Textarea
                    id="hero-description"
                    value={heroContent.description}
                    onChange={(e) => setHeroContent({...heroContent, description: e.target.value})}
                    rows={3}
                  />
                </div>
                <Button onClick={handleHeroUpdate} className="bg-emerald-600 hover:bg-emerald-700">
                  Update Hero Section
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Service</CardTitle>
                  <p className="text-gray-600">Add a new service to your website</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="service-title">Service Title</Label>
                    <Input
                      id="service-title"
                      value={newService.title}
                      onChange={(e) => setNewService({...newService, title: e.target.value})}
                      placeholder="e.g., Corporate Events"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service-description">Description</Label>
                    <Textarea
                      id="service-description"
                      value={newService.description}
                      onChange={(e) => setNewService({...newService, description: e.target.value})}
                      placeholder="Brief description of the service"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="service-price">Starting Price</Label>
                    <Input
                      id="service-price"
                      value={newService.price}
                      onChange={(e) => setNewService({...newService, price: e.target.value})}
                      placeholder="e.g., Starting at $2,000"
                    />
                  </div>
                  <Button onClick={handleAddService} className="bg-emerald-600 hover:bg-emerald-700">
                    Add Service
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Services</CardTitle>
                  <p className="text-gray-600">Manage your existing services</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                          <Badge variant="secondary" className="mt-2">{service.price}</Badge>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Gallery Management</CardTitle>
                <p className="text-gray-600">Upload and manage your event gallery images</p>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="text-gray-400">
                      <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium">Upload Gallery Images</p>
                      <p className="text-gray-600">Drag and drop images or click to browse</p>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <p className="text-gray-600">Configure your website settings and preferences</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="The Events Edit" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" defaultValue="hello@theeventsedit.com" />
                </div>
                <div>
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" defaultValue="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Event Plaza, New York, NY 10001" rows={3} />
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}