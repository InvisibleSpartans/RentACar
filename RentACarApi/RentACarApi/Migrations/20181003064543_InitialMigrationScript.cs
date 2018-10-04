using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RentACarApi.Migrations
{
    public partial class InitialMigrationScript : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarItems",
                columns: table => new
                {
                    Id = table.Column<short>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarName = table.Column<string>(nullable: true),
                    CarRate = table.Column<short>(nullable: false),
                    CarSeats = table.Column<short>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BookingItems",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Pickup_city = table.Column<string>(nullable: true),
                    Pickup_address = table.Column<string>(nullable: true),
                    PickUpLng = table.Column<double>(nullable: false),
                    PickUpLat = table.Column<double>(nullable: false),
                    Drop_city = table.Column<string>(nullable: true),
                    Drop_address = table.Column<string>(nullable: true),
                    DropLng = table.Column<double>(nullable: false),
                    DropLat = table.Column<double>(nullable: false),
                    Pickup_date = table.Column<DateTime>(nullable: false),
                    Drop_date = table.Column<DateTime>(nullable: false),
                    CarIdId = table.Column<short>(nullable: true),
                    TotalPrice = table.Column<short>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BookingItems_CarItems_CarIdId",
                        column: x => x.CarIdId,
                        principalTable: "CarItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingItems_CarIdId",
                table: "BookingItems",
                column: "CarIdId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingItems");

            migrationBuilder.DropTable(
                name: "CarItems");
        }
    }
}
