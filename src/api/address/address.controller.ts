import { Controller, Get} from '@nestjs/common';

@Controller('address')
export class AddressController {
  @Get()
  getAddress() {
    return 'hai';
  }
}
