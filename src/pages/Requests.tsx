import { Check, X, Clock, MessageCircle, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockRequests } from "@/data/mockData";

const Requests = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-warning text-warning-foreground";
      case "approved": return "bg-success text-success-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "buy": return "text-primary";
      case "borrow": return "text-accent";
      case "exchange": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const receivedRequests = mockRequests.filter(req => req.owner === "You");
  const sentRequests = mockRequests.filter(req => req.requester === "You");

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Requests</h1>
          <p className="text-muted-foreground">
            Manage incoming and outgoing book requests
          </p>
        </div>

        <Tabs defaultValue="received" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="received">
              Received ({receivedRequests.length})
            </TabsTrigger>
            <TabsTrigger value="sent">
              Sent ({sentRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-4">
            {receivedRequests.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No requests received yet</p>
                </CardContent>
              </Card>
            ) : (
              receivedRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-card-custom transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{request.bookTitle}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>Request from <strong>{request.requester}</strong></span>
                          <span className={`font-medium ${getTypeColor(request.type)}`}>
                            to {request.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {request.requestTime}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <p className="text-sm italic">"{request.message}"</p>
                    </div>
                    
                    {request.status === "pending" && (
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          <Check className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    )}
                    
                    {request.status === "approved" && (
                      <div className="flex items-center gap-2 text-success">
                        <Check className="h-4 w-4" />
                        <span className="text-sm font-medium">Request approved</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            {sentRequests.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No requests sent yet</p>
                </CardContent>
              </Card>
            ) : (
              sentRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-card-custom transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{request.bookTitle}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>Request to <strong>{request.owner}</strong></span>
                          <span className={`font-medium ${getTypeColor(request.type)}`}>
                            to {request.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {request.requestTime}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <p className="text-sm italic">"{request.message}"</p>
                    </div>
                    
                    {request.status === "pending" && (
                      <div className="flex items-center gap-2 text-warning">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Waiting for response...</span>
                      </div>
                    )}
                    
                    {request.status === "rejected" && (
                      <div className="flex items-center gap-2 text-destructive">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Request was declined</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Requests;