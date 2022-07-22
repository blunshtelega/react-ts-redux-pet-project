import {
  BadRequestException,
  Injectable,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import {
  FindManyOptions,
  MoreThan,
  Repository,
  In,
  InsertResult,
} from 'typeorm';
import { PricesService } from './../prices/prices.service';
import { ProductsEntity } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
    private readonly pricesService: PricesService,
  ) {}
  // DONE
  public async createProduct(
    productData: CreateProductDto,
  ): Promise<ProductsEntity | BadRequestException> {
    try {
      const newProduct = this.productsRepository.create(productData);
      await this.productsRepository.save(newProduct);
      return newProduct;
    } catch (e) {
      throw new BadRequestException('Что-то пошло не так (createProduct)');
    }
  }
  // DONE
  // Создание ряда товаров из прайса
  public async createGoodsFromConvertedPrice(
    priceId: number,
  ): Promise<InsertResult> {
    const convertedPrice = await this.pricesService.parsePrice(priceId);
    const productsEntities: ProductsEntity[] = [];
    convertedPrice.forEach((element: any) => {
      const productEntity = new ProductsEntity();
      productEntity.productCode = convertedPrice[0].productCode;
      productEntity.title = convertedPrice[0].title;
      productEntity.productPrice = convertedPrice[0].productPrice;
      productEntity.updatedAt = new Date();
      productsEntities.push(element);
    });
    return await this.productsRepository.upsert(productsEntities, [
      'productCode',
    ]);
  }

  // DONE
  public async findById(id: number): Promise<any> {
    const foundProduct = await this.productsRepository.findOne(id);
    if (foundProduct) {
      return foundProduct;
    }
  }
  // DONE
  public async getAll() {
    const foundProducts = await this.productsRepository.find({});
    return foundProducts;
  }

  // Пагинация
  // TODO - ПОМЕНЯТЬ НА КУРСОРНУЮ
  public async getPosts(offset?: number, limit?: number, startId?: number) {
    const where: FindManyOptions<ProductsEntity>['where'] = {};
    let separateCount = 0;
    if (startId) {
      where.id = MoreThan(startId);
      separateCount = await this.productsRepository.count();
    }

    const [items, count] = await this.productsRepository.findAndCount({
      where,
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });
    console.log(items);
    console.log(count);
    const pages = count / items.length;
    return {
      items,
      count: startId ? separateCount : count,
      pages,
    };
  }
}
