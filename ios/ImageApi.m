//
//  ImageApi.m
//  TTN_TEST
//
//  Created by vikaskumar on 11/9/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ImageApi.h"

@implementation ImageApi
RCT_EXPORT_MODULE();
RCT_REMAP_METHOD(fetchProducts,
                 fetchProductsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  
   NSMutableURLRequest *urlRequest = [[NSMutableURLRequest alloc] initWithURL:[NSURL URLWithString:@"https://5dbfc096e295da001400b90d.mockapi.io/codingChallenge/v1/images"]];
   [urlRequest setHTTPMethod:@"GET"];
  // [urlRequest setCachePolicy: NSURLRequestReturnCacheDataElseLoad];
   NSURLSession *session = [NSURLSession sharedSession];
   NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:urlRequest completionHandler:^(NSData *data, NSURLResponse *response, NSError *error)
                                     {
     NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
     if(httpResponse.statusCode == 200)
     {
       NSError *parseError = nil;
       NSDictionary *responseDictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
       NSString *jsonString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
       NSLog(@"The response is - %@",responseDictionary);
       resolve(jsonString);
     }
     else
     {
       NSLog(@"Error");
       //callback(@[error.localizedDescription, [NSNull null]]);
       reject(error.localizedDescription, error.localizedDescription, error);
     }
   }];
   [dataTask resume];
}
@end
