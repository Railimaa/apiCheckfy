import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { ValidateBankAccountOwnerShipService } from './validate-bank-account.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidateBankAccountOwnerShipService],
  exports: [ValidateBankAccountOwnerShipService],
})
export class BankAccountsModule {}
